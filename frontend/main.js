const url = "http://localhost:3001/veiculos"
const newVeiculo = {
    veiculo: "onix",
    marca_id: 3,
     ano: 2020,
      descricao: "feito de papel",
       vendido: "false"
}

const VeiculoUpdate = {
    veiculo: "sandero",
    marca_id: 3,
     ano: 2020,
      descricao: "feito de papel",
       vendido: "false"
}

function getVeiculos(){
    axios.get(url)
    .then(response => {
        const data = response.data
        console.log(response);
        renderResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
// getVeiculos()

function addNewVeiculo(){
    axios.post(url, newVeiculo)
        .then(response => {
            alert(JSON.stringify(response.data))})
        .catch(error => console.log(error))
}


function updateVeiculo(){
    axios.put(url+"/16", VeiculoUpdate)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// updateVeiculo()

function deleteVeiculo(){
    axios.delete(url+"/delete/16")
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// deleteVeiculo()

function getByIdVeiculos(){
    axios.get(`${url}/21`)
    .then(response => {
        const data = response.data
        console.log(response);
        renderResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
// getByIdVeiculos()