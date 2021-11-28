var express = require('express');
var router = express.Router();
const VeiculoController = require('../controllers/VeiculoController')
//USUARIO
router.get("/", VeiculoController.findAll)
router.get("/:id", VeiculoController.findById)
router.post("/", VeiculoController.post)
router.put("/:id", VeiculoController.put)
router.patch("/:id", VeiculoController.patch)
router.delete("/delete/:id", VeiculoController.delete)

module.exports = router; 