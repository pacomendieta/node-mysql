const  express = require('express')
const  libreriaController = 
require ( '../controllers/libreriaController.js')

const router = express.Router()


router.get('/', (req,res)=>{
    if ( req.query.program )
        libreriaController.listarLibreriasPrograma(req,res)
    else
        libreriaController.listarLibrerias(req,res)
} )

module.exports =  router