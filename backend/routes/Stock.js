const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Stock = sequelize.define('Stock', {
  produit: { type: DataTypes.STRING },
  quantite: { type: DataTypes.INTEGER },
  prix: { type: DataTypes.DECIMAL(10, 2) },
  description: { type: DataTypes.TEXT },
}, { timestamps: true });

module.exports = Stock;
