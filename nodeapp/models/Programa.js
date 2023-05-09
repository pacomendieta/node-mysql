'use strict';
const {   Model } = require('sequelize');
//import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class Programa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here. Program<-->Libreria
      models.Programa.belongsTo(models.Lenguaje)
      
      models.Programa.belongsToMany( models.Libreria, {
        through: "ProgramasLibrerias",
        as: "librerias", 
        foreignKey: "programaId" 
       } );
    }
  }
  Programa.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Programa',
    tableName: 'programas'
  });
  return Programa;
};