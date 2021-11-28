const fs = require('fs')
const { Veiculo, Marca } = require('../models')
const { Op } = require('sequelize')


const VmController = {
    post: async (req, res) => {

        const { veiculo, marca_id, ano, descricao, vendido } = req.body

        await Veiculo.create({
            veiculo, marca_id, ano, descricao, vendido
        })
        return res.json({ message: "veiculo criado com sucesso" })
    },
    put: async (req, res) => {
        const { id } = req.params
        const { veiculo, marca_id, ano, descricao, vendido } = req.body
        console.log(veiculo, marca_id, ano, descricao, vendido, id);

        var dataCompleta = new Date();

        await Veiculo.update({
            veiculo, marca_id, ano, descricao, vendido, updateAt: dataCompleta
        }, {
            where: { id }
        })
        return res.json({ message: "Veiculo atualizado" })
    },
    findAll: async (req, res) => {
        let veiculos = await Veiculo.findAll({})
        return res.json(veiculos)
    },
    findById: async (req, res) => {
        const { id } = req.params
        let veiculos = await Veiculo.findAll({ where: { id } })

        return res.json(veiculos)
    },
    findByBody: async (req, res) => {
        const {veiculo} = req.body
        let veiculos = await Veiculo.findAll({ where: { veiculo } })

        return res.json(veiculos)
    },
    delete: async (req, res) => {
        const { id } = req.params

        Veiculo.destroy({ where: { id } })
        return res.json({ message: "Veiculo apagado" })
    },
    veiculosNVendidos: async (req, res) => {
       const veiculosNVendidos = await Veiculo.findAll({
           where: {vendido:"false"}
       })
    return res.json(veiculosNVendidos)
    },
    veiculosPorFabricante: async (req, res) => {
        const {marca_id} = req.body
        const veiculossPorFabricante = await Veiculo.findAll({
            where: {marca_id}
        })
     return res.json(veiculossPorFabricante)
     }
}
module.exports = VmController;