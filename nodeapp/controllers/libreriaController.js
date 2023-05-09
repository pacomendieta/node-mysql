const { Libreria } = require ( "../models" )
const { Programaslibrerias}  = require("../models")
const Op= require('sequelize').Op

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
    let libs="";
    console.log("listarLibreriasPrograma()...",req.query.program)
    Programaslibrerias.findAll ( 
        {
            //attributes:['libreriaId'],
            where:{programaId:req.query.program }
        },      
    )
    .then( (data)=>{
       let IDs =[]
       libs = JSON.stringify(data)
       libs = JSON.parse(libs)
       libs.map( lib=>IDs.push(lib.libreriaId) )
       console.log("Librerias, IDS:", libs, IDs)
       libreriasByIDs( res,IDs)

    })
    .catch( (err)=>console.log("Error:",err))
   
}
const libreriasByIDs=( res, IDs )=>{
    Libreria.findAll( {where: { Id:{[Op.in]:IDs} } }) 
    .then( data=> {
        res.status(200).json(data);
    } )
    .catch( error=>console.log("error:", error))
} 



module.exports = {
    listarLibrerias,
    listarLibreriasPrograma
}
