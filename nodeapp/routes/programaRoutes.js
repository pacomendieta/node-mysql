import express from 'express'
import programaController from '../controllers/programaController.js'

const router = express.Router()

router.get('/', (req,res)=>programaController.listarProgramas(req,res) )

export default router
