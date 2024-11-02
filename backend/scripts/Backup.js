import React from 'react';

const Backup = () => {
  const handleBackup = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/backup', { method: 'POST' });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la base de données:', error);
    }
  };

  return (
    <div>
      <h1>Sauvegarde de la Base de Données</h1>
      <button onClick={handleBackup}>Sauvegarder la Base de Données</button>
    </div>
  );
};

export default Backup;
