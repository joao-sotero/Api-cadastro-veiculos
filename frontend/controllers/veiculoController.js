const axios = require('axios')

const VmController = {
    //criar um novo veiculo
    post: async (req, res) => {
        const veiculo = req.body
        await axios.post("http://localhost:3001/veiculos", veiculo )

        return res.redirect('/')
    },
    //altera um veiculo
    put: async (req, res) => {
        const {id} = req.params
        const veiculo = req.body
     await axios.put("http://localhost:3001/veiculos/"+id, veiculo )
        return res.redirect('/')
    },
    //buscar todos os veiculos e trás a marca correspondente a sua foreign key
    findAll: async (req, res) => {
        const { filter, marca, decada} = req.query
        let {data} = await axios.get('http://localhost:3001/veiculos')
        let veiculos = [];
        let marcas = [] = data.marcas;
        let listNVendido = [];
        let listVeiculoM= [];
        let listDecada = [];

        for(i = 0; i < data.veiculos.length; i++){
            if(data.veiculos[i].vendido === "FALSE"){}
            listNVendido.push(data[i])
            
        }

        if(filter){
            for(i = 0; i < data.veiculos.length; i++){
                if(data.veiculos[i].veiculo === filter){
                    veiculos.push(data.veiculos[i])
                }
            }
        }else{
            veiculos = data.veiculos
        }
    
        if(marca){
        for( i = 0; i < data.veiculos.length;i++){
            if(data.veiculos[i].marca_id == marca){
                listVeiculoM.push(data.veiculos[i])
            }   
        }
    }
        
        if(decada){
            let dobro = parseInt(decada) + 10
            for(i = 0; i< data.veiculos.length; i++){
                if(data.veiculos[i].ano >= decada && data.veiculos[i].ano <= dobro){
                    listDecada.push(data.veiculos[i])
                    console.log(data.veiculos[i].ano);
                }
            }
        }
    
        return res.render('veiculo/veiculo', {veiculos, marcas,listNVendido, listVeiculoM, listDecada, decada})
    },
    //buscar veiculo por id
    editar: async (req, res) => {
        const {id} = req.params
        let {data} = await axios.get("http://localhost:3001/veiculos/"+id)
        return res.render('veiculo/veiculo-edit.ejs',{data})
    },
    //Excluir um veiculo
    delete: async (req, res) => {
        const {id} = req.params
        await axios.delete("http://localhost:3001/veiculos/"+id)
        return res.redirect('/')
    }
}
module.exports = VmController;