//cricando um servidor com o modulo padraõ http
const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }
  //num exemplo real a gente pega isso de um banco de dados ( a gente vai fazer isso depois)
  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@dow.com",
      },
      {
        name: "Hane doe",
        email: "jane@doe",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});
//lembre-se pra poder acessar o servidor online vc precisa rodar ele primeiro
//aqui no terminal dentro da sua pasta, é só digitar node arquivo.js
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
