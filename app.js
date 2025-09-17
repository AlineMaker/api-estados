/***********************************************************************************************************************************************************************************
 * Objetivo :API responsável em criar endPoints referente estados e cidades
 * Data: 15/09/2025
 * Autor: Aline Alves de Souza
 * Versão 1.0 
 * 
 * Observações: Instalar dependências para criar a  API
 *      express     - npm install express --save instala as dependencias para criar uma API
 *      cors        - npm install cors    --save instala as dependencias para configurar as permissoes de uma api
 *      body-parser - npm install body-parser --save instala as dependencias para receber os tipos de  dados via Post ou PUT
 * 
 *      no githup depois de instalar projeto de npm i intala node_modules com as especificações de package.json 
 * 
 * busque uma porta livre para rodar seu trabalho
 **********************************************************************************************************************************************************************************/

//import das dependencias
const express     = require('express')
const cors        = require('cors')
const bodyParser  = require('body-parser')
//import da funcoes
const dados       = require('./modulo/funcoes.js')// nao esquece de por .js

//Define a porta padrao da API, se for em um servidor de nuvem nao tem acesso a porta

// em execução local podemos definir uma porta livre
const PORT       = process.PORT || 8080

const app = express()
// com asteristico ele responde a qualquer servidor, ou ao servidor local. Quando fazer serviço particular por endereço do ip que estara o front end 202.555....
app.use((request, response, next) => {

response.header('Acess-Control-Allow-Origin', '*') //ip origem
//response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') 
response.header('Acess-Control-Allow-Methods', 'GET') // metodos (verbos) do protocolo http
//put precisa ficar em aberto quase como duas instancias ele precisa do options porque ele eh a 2 requisição do put 
// configuracao do cors
app.use(cors())
next() // next é obrigatorio para api continuar escutando os endpoints 


})


//request -> recebe os dados da API
//Response -> envia os dados na API
//Endipoints
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()

        response.status(estados.statuscode)
        response.json(estados)
    
})
// endipoint 
app.get('/v1/estado/:uf', function(request ,response){


let sigla = request.query.uf

console.log(sigla)
})


// endpoint para regiao
app.get('/v1/regiao/estado/:id', function(request, response){
    let regiaoEstados = request.query.regiao
    let sigla         = request.query.uf
    let id    = request.params.id

    console.log(regiaoEstados)
    console.log(sigla)
    console.log(id)
    
})


//endpoint para cidades
app.get('/v1/cidades/regiao/estado/:id', function (request, response){
    
})
//start api
app.listen(PORT, function(){
    console.log('API aguardando requisições')
})