'use strict';
//const {   Model } = require('sequelize');
import {Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class Lenguaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lenguaje.init({
    leng_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lenguaje',
  });
  return Lenguaje;
};