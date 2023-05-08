import Libreria from "../models/libreria.js"

const listarLibrerias = (req,res)=>{
    console.log("listarLibrerias()...")
    Libreria.findAll( )
    .then( (data)=>{
        res.status(200).json(data)      
    }
    )
    .catch( (err)=>{ console.log("Error ", err)})
}

//librerias de un programa  (/librerias/p)
const listarLibreriasPrograma = (req,res)=>{
    console.log("listarLibreriasPrograma()...")
    Libreria.findAll( { where: {program_id:req.query.program}})
    .then( (data)=>{
        res.status(200).json(data)      
    }
    )
    .catch( (err)=>{ console.log("Error ", err)})
}

export default {
    listarLibrerias,
    listarLibreriasPrograma
}
