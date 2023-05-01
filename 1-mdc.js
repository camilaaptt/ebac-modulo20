/*
    1. Calcule o MDC (máximo divisor comum) entre dois números.
*/

function calculaMDC(a, b) {
    var resto;
    while (resto != 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
var resultado = calculaMDC(12, 9);
console.log(`O MDC é: ${resultado}`);
