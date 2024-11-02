const { Sequelize, DataTypes } = require('sequelize');

// Créez une instance de Sequelize pour vous connecter à votre base de données
const sequelize = new Sequelize('festivalDB', 'root', 'password123', {
  host: 'localhost', // Adresse du serveur de base de données (localhost pour local)
  dialect: 'mysql',  // Type de base de données (mysql dans ce cas)
  logging: false,    // Désactive les logs SQL, facultatif
});

// Importez les modèles
const Client = require('./Client')(sequelize, DataTypes);
const Stock = require('./Stock')(sequelize, DataTypes);
const Commande = require('./Commande')(sequelize, DataTypes);

// Testez la connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Exportez sequelize et les modèles
module.exports = {
  sequelize,
  Client,
  Stock,
  Commande
};
