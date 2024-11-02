module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    produit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'stocks',
  });

  return Stock;
};
