/* ==========Importanto dependências==========*/

const express = require("express");
const server = express();
const path = require("path"); /*Path serve para acessar caminhos do diretório */
const pages = require("./pages.js")
/* ==========Criando uma rota==========*/
server
  //utilizar body da requisição
  .use(express.urlencoded({ extended: true }))
  // Utilizando arquivos estáticos
  .use(express.static("public"))

  // Configurando Template engine
  .set(
    "views",
    path.join(__dirname, "views")
  ) /**__dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento */
  .set("view engine", "hbs")

  // Criando as rotas da aplicação
  .get("/", pages.index)
  .get("/kennel", pages.kennel)
  .get("/kennels", pages.kennels)
  .get("/create-kennel", pages.createKennel)
  .post("/save-kennel", pages.saveKennel);

/* ==========Ligando o servidor==========*/

server.listen(5500);
