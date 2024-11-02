const { sequelize } = require('./models');
const Client = require('./models/Client');
const Stock = require('./models/Stock');
const Commande = require('./models/Commande');

async function init() {
  try {
    await sequelize.sync({ force: true }); // Efface et recrée les tables

    // Ajoutez des données initiales
    await Client.bulkCreate([
      { nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@example.com', telephone: '0123456789', adresse: '10 Rue de Paris' },
      // Ajoutez d'autres clients
    ]);

    await Stock.bulkCreate([
      { produit: 'E-liquide 1', quantite: 100, prix: 19.99 },
      // Ajoutez d'autres produits
    ]);

    console.log('Base de données initialisée avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données :', error);
  } finally {
    process.exit();
  }
}

init();
