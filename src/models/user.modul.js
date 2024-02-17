const mongoose = require("mongoose");

//esse cara vai receber um objeto e dentro vai ter os campos que o úsuaria vai ter
const userSchema = new mongoose.Schema({
  fristName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});
//fazendo o codule em si
const UserModel = mongoose.model("User", userSchema);
//esportando o modulo
module.exports = UserModel;
