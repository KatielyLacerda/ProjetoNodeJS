//criando um servidor com o modulo express que é muito mais fácil
const express = require("express");

//vou precisar disso pra criar o modele e end ponint
const UserModel = require("../src/models/user.modul");
const { trusted } = require("mongoose");
//baixe o express, va no terminal  e digite npm install express
//inicializaro o expressse
const app = express();

//usando middkewares pra mostra coisas sobre a requisição que  agente acbaou de fazer  (SUPER LEGAL NÉ) sempre vai aparecer depois da gente fazer a requisição as repsostas sobre ela no temrinal!
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`); //mostra o metodo
  console.log(`Content Type: ${req.headers["content-type"]}`); //mostra o tipo
  console.log(`Date: ${new Date()}`); //mostra a data
  next();
});
//aqui eu tou sinalizando pro express que vou mandar json pra ele (pelo postman)
app.use(express.json());

//enviando html de forma dinamida , eu instalo a biblioteca ejs e dai deu gido que
//o express vai usar ocmo view engine, o ejs que acabdei de baixar
app.set("view engine", "ejs");
//as views que o ejs vão procurar estão em
app.set("views", "src/views");
// criaer um endpont pra enviar html dinamicamente
app.get("/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

//endpoint pra home
app.get("/home", (req, res) => {
  res.contentType("application.html");
  res.status(200).send("<h1> Hello World</h1>");
});

//tou usando o get pra pegar esse usuarios , e vou criar um endpoint pra eles
//esse endpoint pega todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
//agora vamos fazer um função que pegue um usuário pelo ID dele (o que tá no mongodb)
//pra buscar um cara como ID geralmente a gente faz no postman algo como, http://localhost:8080/user/id do carinha que a gente quer
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; //essa variável tem que ter o msm nome da que está no cabeçario da função

    //pra pegar um usuário pelo id no banco
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
//esse end ponto não é do tipo get, ou seja ele n pega, pe do tipo post, ou seja, criação, ele serve pra criar usuários
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.messsage);
  }
});
//essa endpoint é pra atualizar um registro , também na forma localhost/urser/id do registro que a gente quer alterar
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//esse endpoint é pra deletar um arquivo
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//inicializaro servidor definindo uma porta
const port = 8080;
app.listen(port, () => {
  console.log(`Rodando com Express na porta ${port}!`);
});
