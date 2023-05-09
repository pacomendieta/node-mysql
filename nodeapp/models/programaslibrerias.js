'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class programaslibrerias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  programaslibrerias.init({
    programaId: DataTypes.INTEGER,
    libreriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Programaslibrerias',
    tableName: 'programaslibrerias'
  });
  return programaslibrerias;
};