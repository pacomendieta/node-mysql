'use strict';
const {   Model } = require('sequelize');
//import {Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class Lenguaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here: Lenguaje 1 - N Programas
      models.Lenguaje.hasMany(models.Programa, {
        foreignKey: 'lenguajeId', // ForeignKey en tabla N
        as: 'programas'      //nombre tabla N
      })
    }
  }
  Lenguaje.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lenguaje',
    tableName: 'lenguajes'
  });
  return Lenguaje;
};