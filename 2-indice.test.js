const { indexMaior, indexMenor, existeRepetidos } = require('./2-indice')

describe('Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.', () => {
    it('Valida o índice do maior valor', () => {
        expect(indexMaior).toBe(9)
    });
    it('Valida o índice do menor valor', () => {
        expect(indexMenor).toBe(2)
    });
    it('Valida se existe números repetidos no array', () => {
        expect(existeRepetidos).toBe(false)
    });
});