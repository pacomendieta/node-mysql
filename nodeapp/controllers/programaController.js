const { Programa } = require('../models')

const listarProgramas = (req,res)=>{
    Programa.findAll()
    .then( (data)=>{
        res.status(200).json(data)      
    }
    )
    .catch( (err)=>{ console.log("Error ", err)})
}

module.exports =  {
    listarProgramas
}