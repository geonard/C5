const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); // Garde cette importation si tu as déjà configuré sequelize dans ./models
const clientsRouter = require('./routes/client');
const importRouter = require('./routes/import'); // Nouvelle importation pour les données d'importation

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/clients', clientsRouter);
app.use('/api/import', importRouter); // Route pour importer des données depuis le fichier Excel

// Démarrer le serveur et synchroniser la base de données
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync(); // Synchroniser les modèles avec la base de données
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
