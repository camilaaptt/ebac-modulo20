/*
    3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. 
    A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
*/

function somaMultiplos() {
    var soma = 0;
    for (var i = 1; i < 1000; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i;
      }
    }
    return soma;
  }
  
  var resultado = somaMultiplos();
  console.log(`O resultado da soma dos múltiplos de 5 ou 7 abaixo de 1000 é: ${resultado}`);

  module.exports = { resultado }