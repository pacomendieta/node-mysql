const { Programa } = require('../models')
const ClassController = require ( './ClassControler')
const db = require('../models')

class ProgramaController extends ClassController {
    constructor( db) {
        super(db, "Programa")
    }
}

const  repositorio = new ProgramaController( db )


const listaProgramas=(req,res)=>{
     repositorio.getAll()
     .then( pros=>res.status(200).json(pros))
     .catch( error=>console.log("Error:", error))
}


const updatePrograma = (req, res)=>{
    repositorio.update( req.params.id, req.body)
    .then( ()=>res.status(200).send("ok"))
    .catch(error=>console.log("Error updating:", error)) 
}


const insertPrograma = (req, res)=>{
    repositorio.insert( req.body )
    .then( ()=>res.status(200).send("Insertado ok"))
    .catch(error=>console.log("Error insertando:", error)) 
}


const deletePrograma = (req, res)=>{
    repositorio.delete( req.params.id )
    .then( ()=>res.status(200).send("ok"))
    .catch(error=>console.log("Error deleting:", error)) 
}



module.exports =  {
    listaProgramas,
    updatePrograma,
    insertPrograma,
    deletePrograma
}