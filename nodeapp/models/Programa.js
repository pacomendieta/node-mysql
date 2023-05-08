'use strict';
//const {   Model } = require('sequelize');
import { Model } from ('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Programa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here. Program<-->Libreria
      models.Program.belongsToMany( models.Libreria, {
        through: "ProgramasLibrerias",
        as: "librerias", 
        foreignKey: "program_id" 
       } );
    }
  }
  Programa.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Programa',
  });
  return Programa;
};