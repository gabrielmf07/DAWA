

class Calculadora {
    constructor() {}
  
    sumar(a, b) {
      return a + b;
    }
  
    restar(a, b) {
      return a - b;
    }
  
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        throw new Error("No puedes dividir por cero");
      }
      return a / b;
    }
  }
  
  module.exports = Calculadora;