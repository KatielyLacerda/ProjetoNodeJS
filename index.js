//importando o modulo person
//coloquei o nome entre {} pq ele vai ser um objeto
//const { Person } = require("./person");
//importando o path SÓ PRA ELE SER EXECUTADO
//require("./modules/path");
//criando uma variável e chamando o objeto
//const person = new Person("Felipe");
//console.log(person.sayMyName()); //mostra na tela o resultado

//use mpm install noemonv--save-dev  pra intalar ele só pra quando tiver em desenvolvimento o projeto, ele reinicializa o servidor pós mudanças

//usando o fs
//require("./modules/fs");

//usando o http pra criar um servidor (liga no http.js)
//require("./modules/http");

//criando um servidor usando o expresse
//require("./modules/express");

//consigurando o dotenv
const dotenv = require("dotenv");
//chamando a função pra usar
const connectToDatabase = require("./src/database/connect");
dotenv.config();

connectToDatabase();
//criando um servidor usando o expresse
//se isso aqu

require("./modules/express");
