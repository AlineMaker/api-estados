/***********************************************************************************************************************************************************************************
 * Objetivo : Arquivo responsável pelas funções para criar API de estados e cidades
 * Data: 15/09/2025
 * Autor: Aline Alves de Souza
 * Versão 1.0 
 **********************************************************************************************************************************************************************************/
//import do arquivo d
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Aline Alves de Souza'}


//Retorna a lista de estados 
const getAllEstados = function(){
    let message = { status: true, statuscode:200, development: 'Aline Alves de Souza', uf: []}
    dados.listaDeEstados.estados.forEach(function(item) {
     /// ou vc usa console para mostrar no terminal ou entao 
       // console.log(item.sigla) 
       message.uf.push(item.sigla) 
    })
      //adiciona um novo elemento no json                     // quantidade de atributo em 
    message.quantidade = message.uf.length

    //apaga um elemento existente no json
   // delete message.status
    console.log(message)
  if (message.uf.length > 0)
return message // Resultado Verdadeiro da Api 200
  else
  return MESSAGE_ERROR // Resultado falso da Api 500
}

//Retorna dados do estado filtrando pela sigla
const getEstadoBySigla = function(sigla){

}

//Retorna a cpital do estado filtardo pela sigla
const getCapitalBySigla = function (sigla){

} 

//Retorna a lista de estados filtrando pela  regiao
const getEstadosByregiao = function(regiao){

}


const getCapitalEstados = function(pais){

}

//getAllEstados()

module.exports = {
    getAllEstados
}
















































































































