/*
    2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
*/

// Função para identificar números repetidos no array
function verificaRepetidos(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

// Condição para indicar maior e menor valor do array
var numeros = [12, 45, 1, 56, 23, 9, 36, 19, 101, 350];
const existeRepetidos = verificaRepetidos(numeros);

if (existeRepetidos) {
    console.log("O array possui valores repetidos. Tente novamente com um array sem números repetidos.");
} else {
    var maior = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var indexMaior = numeros.indexOf(maior);
    var indexMenor = numeros.indexOf(menor);

    console.log(`O índice do maior valor ${maior} é: ${indexMaior}`);
    console.log(`O índice do menor valor ${menor} é: ${indexMenor}`);
}
