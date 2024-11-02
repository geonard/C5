module.exports = (sequelize, DataTypes) => {
  const Commande = sequelize.define('Commande', {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'commandes',
  });

  return Commande;
};
