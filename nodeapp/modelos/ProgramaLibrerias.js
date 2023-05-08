import Programa from "./programa";
import Libreria from "./libreria";


//Relacion 1-N Programa-Librerias

Programa.hasMany(Libreria, { foreignKey: 'programa_id' });
Libreria.belongsTo(Programa, { foreignKey: 'programa_id' });



