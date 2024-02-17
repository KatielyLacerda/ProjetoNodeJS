// Importando o mongoose que a gente instalou pra se conectar com a database
const mongoose = require("mongoose");

// Criando função pra conectar, ela vai ser assíncrona e retornar uma Promise
//o arquivo.env guarda os dados sensiveis
const connectToDatabase = async () => {
  const dbURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.3ezrmnc.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbURI);
    console.log("Conexão feita com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados", error);
  }
};

// Agora só exportar o módulo
module.exports = connectToDatabase;
