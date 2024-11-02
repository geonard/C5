const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Récupérer tous les clients
router.get('/', async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

// Ajouter un client
router.post('/', async (req, res) => {
  const client = await Client.create(req.body);
  res.json(client);
});

// Modifier un client
router.put('/:id', async (req, res) => {
  const client = await Client.update(req.body, { where: { id: req.params.id } });
  res.json(client);
});

// Supprimer un client
router.delete('/:id', async (req, res) => {
  await Client.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
