import React from 'react';

const InsertData = () => {
  const handleInsertData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/insert-data', { method: 'POST' });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Erreur lors de l\'insertion des données:', error);
    }
  };

  return (
    <div>
      <h1>Insérer les Données</h1>
      <button onClick={handleInsertData}>Insérer les Données</button>
    </div>
  );
};

export default InsertData;
