const { Veiculo, Marca } = require('../models')
const { Op } = require('sequelize')


const VmController = {
    //criar um novo veiculo
    post: async (req, res) => {

        const { veiculo, marca_id, ano, descricao, vendido } = req.body

        await Veiculo.create({
            veiculo, marca_id, ano, descricao, vendido
        })
        return res.json({ message: "veiculo criado com sucesso" })
    },
    //altera um veiculo
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
    //buscar todos os veiculos e trás a marca correspondente a sua foreign key
    findAll: async (req, res) => {
        let veiculos = await Veiculo.findAll({
           include:[{
               model: Marca, as:"marca"
           }] 
        })
        return res.json(veiculos)
    },
    //buscar veiculo por id
    findById: async (req, res) => {
        const { id } = req.params
        let veiculos = await Veiculo.findAll({ where: { id } })

        return res.json(veiculos)
    },
    //busca veiculo pelo nome
    findByBody: async (req, res) => {
        const {veiculo} = req.body
        let veiculos = await Veiculo.findAll({ where: { veiculo:{ [Op.like]: `%${veiculo}%` } }})

        return res.json(veiculos)
    },
    //Excluir um veiculo
    delete: async (req, res) => {
        const { id } = req.params

        Veiculo.destroy({ where: { id } })
        return res.json({ message: "Veiculo apagado" })
    },
    //Retorna a quantidade e veiculos não vendidos
    veiculosNVendidos: async (req, res) => {
       const veiculosNVendidos = await Veiculo.findAll({
           where: {vendido:"false"}
       })
      const quantidade = veiculosNVendidos.length
    return res.json(quantidade)
    },
    //retorna os veiculos de um determinado fabricante
    veiculosPorFabricante: async (req, res) => {
        const {marca_id} = req.body
        const veiculossPorFabricante = await Veiculo.findAll({
            where: {marca_id}
        })
     return res.json(veiculossPorFabricante)
     }
}
module.exports = VmController;