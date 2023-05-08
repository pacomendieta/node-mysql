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
    program_id: DataTypes.INTEGER,
    libreria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'programaslibrerias',
  });
  return programaslibrerias;
};