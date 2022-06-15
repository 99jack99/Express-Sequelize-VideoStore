'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Film.hasMany(models.Sale, {
        foreignKey: 'filmId'
      });

      Film.hasMany(models.Rent, {
        foreignKey: 'filmId'
      });
    }
  }
  Film.init({
    tittle: DataTypes.STRING,
    genre: DataTypes.STRING,
    length: DataTypes.INTEGER,
    description: DataTypes.STRING,
    sellprice: DataTypes.INTEGER,
    rentprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};