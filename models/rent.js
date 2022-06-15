'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rent.belongsTo(models.Client, {
        foreignKey: 'clientId'
      });

      Rent.belongsTo(models.Film, {
        foreignKey: 'filmId'
      });
    }
  }
  Rent.init({
    clientId: DataTypes.INTEGER,
    filmId:DataTypes.INTEGER,
    
    totalPrice: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};