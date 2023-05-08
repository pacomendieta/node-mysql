import Programa from "../models/programa.js"

const listarProgramas = (req,res)=>{
    Programa.findAll()
    .then( (data)=>{
        res.status(200).json(data)      
    }
    )
    .catch( (err)=>{ console.log("Error ", err)})
}

export default {
    listarProgramas
}