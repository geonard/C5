// CreateDatabase.js
import React from 'react';

const CreateDatabase = () => {
    const handleCreateDatabase = () => {
        // Logique pour exécuter le script de création de la base de données
        console.log("Script de création de la base de données exécuté.");
    };

    return (
        <div>
            <h2>Créer la Base de Données</h2>
            <button onClick={handleCreateDatabase}>Exécuter le Script</button>
        </div>
    );
};

export default CreateDatabase;
