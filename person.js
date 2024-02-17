class Person {
  //criando uma classe que exporta pega o nome
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`;
  }
}
module.exports = {
  Person,
};
