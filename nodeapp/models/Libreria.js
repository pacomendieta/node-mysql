'use strict';
const {   Model } = require('sequelize');
//import { Model } from ('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Libreria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  Libreria<-->Programa
      models.Libreria.belongsToMany( models.Programa, {
        through: "ProgramasLibrerias",
        as: "programas", 
        foreignKey: "libreriaId" 
       } );
    }
  }
  Libreria.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Libreria',
    tableName: 'librerias'
  });
  return Libreria;
};