import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Client = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [editingClient, setEditingClient] = useState(null);

  // Récupérer la liste des clients depuis l'API
  const fetchClients = async () => {
    try {
      const response = await axios.get('/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des clients", error);
    }
  };

  // Charger les clients à l'initialisation
  useEffect(() => {
    fetchClients();
  }, []);

  // Ajouter un nouveau client
  const addClient = async () => {
    try {
      const response = await axios.post('/api/clients', newClient);
      setClients([...clients, response.data]);
      setNewClient({ name: '', email: '', phone: '', address: '' });  // Réinitialiser le formulaire
    } catch (error) {
      console.error("Erreur lors de l'ajout du client", error);
    }
  };

  // Supprimer un client
  const deleteClient = async (id) => {
    try {
      await axios.delete(`/api/clients/${id}`);
      setClients(clients.filter(client => client.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du client", error);
    }
  };

  // Mettre à jour un client
  const updateClient = async () => {
    try {
      const response = await axios.put(`/api/clients/${editingClient.id}`, editingClient);
      setClients(clients.map(client => client.id === editingClient.id ? response.data : client));
      setEditingClient(null);  // Réinitialiser après modification
    } catch (error) {
      console.error("Erreur lors de la modification du client", error);
    }
  };

  // Gérer les changements dans le formulaire d'ajout
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewClient({ ...newClient, [name]: value });
  };

  // Gérer les changements dans le formulaire de modification
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditingClient({ ...editingClient, [name]: value });
  };

  return (
    <div>
      <h1>Gestion des Clients</h1>

      {/* Formulaire d'ajout de nouveau client */}
      <h2>Ajouter un nouveau client</h2>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={newClient.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newClient.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Téléphone"
        value={newClient.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Adresse"
        value={newClient.address}
        onChange={handleChange}
      />
      <button onClick={addClient}>Ajouter le client</button>

      {/* Liste des clients */}
      <h2>Liste des clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.email} - {client.phone} - {client.address}
            <button onClick={() => deleteClient(client.id)}>Supprimer</button>
            <button onClick={() => setEditingClient(client)}>Modifier</button>
          </li>
        ))}
      </ul>

      {/* Formulaire de modification d'un client */}
      {editingClient && (
        <div>
          <h2>Modifier le client</h2>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={editingClient.name}
            onChange={handleEditChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editingClient.email}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={editingClient.phone}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            value={editingClient.address}
            onChange={handleEditChange}
          />
          <button onClick={updateClient}>Sauvegarder les modifications</button>
        </div>
      )}
    </div>
  );
};

export default Client;
