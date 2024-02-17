//esse caro ajuda a manipular o sitema de arquivos
const fs = require("fs");
const path = require("path"); // a gente vai usar ele em conjunto tbm

//criando uma pasta

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("erro", error);
  }
  console.log("Pasta criado com sucesso!");
});
//criando um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Hello Node",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }

    console.log("Arquivo criado com sucesso!");
    //(se vc usar outro wrideFile ele vai sumir com esse conteúdo criado e colcoar o novo)
    //se vc quiser adicionar conteúdo ai que já existe , ou seja, adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      " Hello world",
      (error) => {
        if (error) {
          return console.log("Erro", error);
        }

        console.log("Arquivo modificado  com sucesso!");
      }
    );
    //lendo um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro", error);
        }
        console.log(data);
      }
    );
  }
);
