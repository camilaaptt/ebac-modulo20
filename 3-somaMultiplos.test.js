const { resultado } = require('./3-somaMultiplos')

describe('Teste unitário com Jest', () => {
    it('Valida soma de todos os múltiplos de 5 ou 7 abaixo de 1000 ', () => {
        expect(resultado).toBe(156361)
    });
});