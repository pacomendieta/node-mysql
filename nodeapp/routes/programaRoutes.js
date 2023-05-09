const express = require ('express');
const programaController = require( '../controllers/programaController.js')

const router = express.Router()

router.get('/', (req,res)=>programaController.listarProgramas(req,res) )

module.exports =  router
