const { resultado } = require('./1-mdc')

describe('Calcule o MDC (máximo divisor comum) entre dois números', () => {
    it('Valida o MDC entre dois números', () => {
        expect(resultado).toBe(3)
    });
});