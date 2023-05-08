import express from 'express'
import libreriaController from '../controllers/libreriaController.js'

const router = express.Router()


router.get('/', (req,res)=>{
    if ( req.query.program )
        libreriaController.listarLibreriasPrograma(req,res)
    else
        libreriaController.listarLibrerias(req,res)
} )

export default router