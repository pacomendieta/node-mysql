import { DataTypes } from "sequelize";
import db from "../database/dbmysql.js";

// Modelo se define con un objeto bd = conexion a la BBDD
const Programa = db.define('programa',{
  program_id: { type:DataTypes.INTEGER,primaryKey:true, autoincrement:true},
  nombre: {type: DataTypes.STRING}
},
{ 
  timestamps: true,
}


)

export default Programa;