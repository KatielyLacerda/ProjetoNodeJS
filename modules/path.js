//o path ajuda a mexer com diretório de arquivos
const path = require("path");
//apenas o nome do arquivo atual
console.log(path.basename(__filename));
//nome do diretório atual
console.log(path.dirname(__filename));
//mostra a extensão do arquivo
console.log(path.extname(__filename));
//criar um objeto path, mostra informações basicas do arquivo
console.log(path.parse(__filename));
//junta caminhos de arquivos, __dirname pega o noem do diretório atual e junta com os proximos qur vc vai adicionando pós virgula
console.log(path.join(__dirname), "test", "teste.html");
