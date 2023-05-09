const { Libreria } = require ( "../models" )
const { Programaslibrerias}  = require("../models")

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
const listarLibreriasPrograma = async (req,res)=>{
    console.log("listarLibreriasPrograma()...",req.query.program)
    let libs = await Programaslibrerias.findAll ( 
        {
            attributes:['libreriaId'],
            where:{programaId:req.query.program }
        },
        
    )
    console.log("Librerias:", libs)
    res.status(200).json(libs)   
}

module.exports = {
    listarLibrerias,
    listarLibreriasPrograma
}
