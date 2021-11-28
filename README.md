<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Projeto Cadastro de Veiculos</h3>

<div align="center">


</div>

---

<p align="center"> API Node, para gerenciamento de veiculos
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Projeto desenvolvido JavaScript com frameworks Node, Sequelize, Express, cors e nodemon com banco de dados Mysql 8. 

O projeto tem por finalidade ser um web service para gerir veiculos, onde pode ser feito o cadastro de um veiculo contendo seu: nome, ano de fabricação, marca, "se já foi vendido" e uma pequena descrição do veiculo.

 Em seus endpoints é possivel: Criar, Editar, Deletar e Listar Veiculos, sejá todos os veiculos ou por algum parametro como: id, nome e por fabricante(MARCA) do veiculo, também é possivel trazer a quantidade de veiculos que ainda não foram vendidos.

 Banco de Dados composto por tuas tabelas: veiculos e marcas, onde veiculos tem uma foreign key de marcas evitando que exista divergencia na escrita do nome da marca. O campo vendido na Tabela "veiculo" é um campo "varchar" onde a aplicação criarar a informação String "TRUE" ou "FALSE".

 Tela para consumo da API ainda em desenvolvimento.

## 🏁 Getting Started <a name = "getting_started"></a>

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### Prerequisites

O que você precisa para instalar o software:

```
Node, versão lts
```
```
MySQL, versão 8
```
```
Visual Studio Code
```
```
Clonar o Repositorio do GitHub
```
### Installing
Após fazer as instalação as necessarias e clonar o repositorio para sua maquina é necessario executar esses comando no terminal dentro da pasta do projeto

Configuar a String de conexão com o banco de dados no arquivo config.js na pasta "backend/config"
Criar o banco de dados com o SCRIPT da pasta backend/SCRIPT DB

```
npm install
```

e rodar o serviço da aplicação

```
npm start
```

Apos inicar o projeto é so entrar no navegador e inserir a seguinte URL 

```
http://localhost:3001/veiculos 
```
Retorna todos os veiculos cadastrados (Se existir algum)

## 🎈 Usage <a name="usage"></a>

A aplicação contém 8 rotas que retornam JSON


Metodo GET - Retorna todos os veiculos cadastrados:
```
http://localhost:3001/veiculos 
```
Metodo GET - Retorna Todos os veiculos que tenhão o nome igual ao passado na variavel de pesquisa pelo corpo da requisição com nome "veiculo"
```
http://localhost:3001/veiculos 
```
Metodo GET - Retorna a quantidade de veiculos não vendidos
```
http://localhost:3001/veiculos/estoque 
```
Metodo GET - Retorna todos dos veiculos de um fabricante passado na variavel de pesquisa pelo corpo da requisição com nome "marca_id"
```
http://localhost:3001/veiculos/fabricante 
```
Metodo GET - Retorna o veiculo que contém o id que foi passado no parametro
```
http://localhost:3001/veiculos/id 
```
Metodo POST - Cria um novo veiculo
```
http://localhost:3001/veiculos 
```
Metodo PUT - Edita as informações do veiculo que contem o id passado no parametro com alteração no "body"
```
http://localhost:3001/veiculos/id 
```
Metodo DELETE - Deleta o veiculo que contém o id passado no paramentro
```
http://localhost:3001/veiculos/deletar/id 
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Mysql](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Cors](https://www.npmjs.com/package/cors) - Middleware Connect / Express
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://www.npmjs.com/package/sequelize) -  ferramenta Node.js ORM


## ✍️ Authors <a name = "authors"></a>

- [@JoãoSotero](https://github.com/joao-sotero) - Idea & Initial work
