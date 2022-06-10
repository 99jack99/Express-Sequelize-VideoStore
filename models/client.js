'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasMany(models.Sale, {
        foreignKey: 'clientId'
      });

      Client.hasMany(models.Rent, {
        foreignKey: 'clientId'
      });
    }
  }
  Client.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};