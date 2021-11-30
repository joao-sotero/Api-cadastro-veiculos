var express = require('express');
var router = express.Router();
const VeiculoController = require('../controllers/VeiculoController')

router.get("/", VeiculoController.findAll) //http://localhost:3001/veiculos Retorna todos os veiculos cadastrados
router.get("/mostrar/:id", VeiculoController.editar)//http://localhost:3001/veiculos/id Retorna o veiculo que contém o id que foi passado no parametro
router.get("/delete/:id", VeiculoController.delete)//http://localhost:3001/veiculos/deletar/id Deleta o veiculo que contém o id passado no paramentro
router.post("/criar", VeiculoController.post)//http://localhost:3001/veiculos Cria um novo veiculo
router.put("/editar/:id", VeiculoController.put)//http://localhost:3001/veiculos/id Edita as informações do veiculo que contem o id passado no parametro com alteração no "body"


module.exports = router; 