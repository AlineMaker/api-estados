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

//Import das dependências
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dados = require('./modulo/funcoes.js');

//Define a porta padrão da API, se for em um servidor de nuvem não tem acesso a porta
// em execução local podemos definir uma porta livre
const PORT = process.PORT || 8080;

//Instância na classe do express
const app = express();

//Configurações do CORS
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*'); //IP de Origem
  response.header('Access-Control-Allow-Methods', 'GET'); //Métodos (Verbos) do protocólo HTTP

  app.use(cors());
  next(); //Próximos Endpoints
});

//Resquest --> Recebe os dados da API
//Response --> Envia os dados na API

//EndPoints
app.get('/v1/estados', function (request, response) {
  let estados = dados.getAllEstados();

  response.status(estados.statuscode);
  response.json(estados);
});

//getEstadosBySigla
app.get('/v1/estado/:uf', function (request, response) {
  let sigla = request.params.uf;
  let estado = dados.getEstadosBySigla(sigla);

  response.status(estado.statuscode);
  response.json(estado);
});

//getCapitalBySigla
app.get('/v1/capital/estado/:uf', function (request, response) {
  let sigla = request.params.uf;
  let capital = dados.getCapitalBySigla(sigla);

  response.status(capital.statuscode);
  response.json(capital);
});

//getEstadosByRegiao
app.get('/v1/regiao/estado/', function (request, response) {
  let regiaoEstados = request.query.regiao;
  let estados = dados.getEstadosByRegiao;

  response.status(estados.statuscode);
  response.json(estados);
});

//getEstadoIsCapitalByCountry
app.get('/v1/pais/estado/', function (request, response) {
  let pais = request.query.pais;
  let isCapital = dados.getEstadoIsCapitalByCountry(pais);

  response.status(isCapital.statuscode);
  response.json(isCapital);
});

//getCidadesBySigla
app.get('/v1/cidades/estados/', function (request, response) {
  let estado = request.query.estado;
  let cidades = dados.getCidadesBySigla(estado);

  response.status(cidades.statuscode);
  response.json(capital);
});

//start da API
app.listen(PORT, function () {
  console.log('API aguardando requisições...');
});
