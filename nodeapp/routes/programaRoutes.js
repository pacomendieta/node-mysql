const express = require ('express');
const programaController = require( '../controllers/programaController.js')

const router = express.Router()

router.get('/', (req,res)=>programaController.listaProgramas(req,res) )
router.post('/:id', (req,res)=>programaController.updatePrograma(req,res) )
router.put('/insert', (req,res)=>programaController.insertPrograma(req,res) )
router.delete('/:id', (req,res)=>programaController.deletePrograma(req,res) )
router.get('/sql', (req,res)=>programaController.sqlPrograma(req,res) )

module.exports =  router
