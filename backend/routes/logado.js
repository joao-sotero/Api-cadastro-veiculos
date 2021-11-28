var express = require('express');
var router = express.Router();
const VeiculoController = require('../controllers/VeiculoController')
//USUARIO
router.get("/", VeiculoController.findAll)
router.get("/find", VeiculoController.findByBody)
router.get("/estoque", VeiculoController.veiculosNVendidos)
router.get("/fabricante", VeiculoController.veiculosPorFabricante)
router.get("/:id", VeiculoController.findById)
router.post("/", VeiculoController.post)
router.put("/:id", VeiculoController.put)
router.delete("/delete/:id", VeiculoController.delete)




router.get('/',(req, res) => { return res.redirect('/veiculos')})

module.exports = router; 