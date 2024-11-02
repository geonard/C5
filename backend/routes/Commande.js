const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Client = require('./Client');
const Stock = require('./Stock');

const Commande = sequelize.define('Commande', {
  quantite: { type: DataTypes.INTEGER },
  statut: { type: DataTypes.ENUM('en attente', 'expédiée', 'annulée') },
}, { timestamps: true });

Commande.belongsTo(Client);
Commande.belongsTo(Stock);

module.exports = Commande;
