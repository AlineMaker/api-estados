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

//Define a porta padrao da API, se for em um servidor de nuvem nao tem acesso a porta

// em execução local podemos definir uma porta livre
const PORT       = process.PORT || 8080

const app = express()
// com asteristico ele responde a qualquer servidor, ou ao servidor local. Quando fazer serviço particular por endereço do ip que estara o front end 202.555....
app.use((request, response, next) => {

response.header('Acess-Control-Allow-Origin', '*')
//response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
response.header('Acess-Control-Allow-Methods', 'GET')
//put precisa ficar em aberto quase como duas instancias ele precisa do options porque ele eh a 2 requisição do put 

app.use(cors())
next() // next é obrigatorio para api continuar escutando os endpoints 


})

app.get('/v1/estados', function(request, response){

})