import { DataTypes } from "sequelize";
import db from "../database/dbmysql.js";

// Modelo se define con un objeto bd = conexion a la BBDD
const Libreria = db.define('librerias',{
  lib_id: { type:DataTypes.INTEGER,primaryKey:true, autoincrement:true},
  nombre: {type: DataTypes.STRING},
  program_id: {
    type: DataTypes.INTEGER,
    references: {
          model: 'Programa',
          key: 'programa_id'
        },
    onDelete: 'CASCADE',
    onUpdate:'CASCADE'
  }
},
{ 
  timestamps: true,
}


)

export default Libreria;