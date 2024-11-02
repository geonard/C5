module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'clients',
  });

  return Client; // Retourne le modèle Client
};
