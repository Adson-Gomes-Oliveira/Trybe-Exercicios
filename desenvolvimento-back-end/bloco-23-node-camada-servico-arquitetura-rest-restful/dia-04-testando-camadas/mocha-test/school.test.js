const { expect } = require('chai');
const { calcMedia } = require('./school');

describe('01. Calcula a média', () => {
  it('01.01 Quando a média for menor que 7 retorna reprovado', () => {
    const calculate = calcMedia(5, 6, 5);
    expect(calculate).to.be.equals('Reprovado');
  });

  it('01.02 Quando a média for maior que 7 retorna aprovado', () => {
    const calculate = calcMedia(8,5,9);
    expect(calculate).to.be.equals('Aprovado');
  });

  it('01.03 Quando a média for igual a 7 retorna aprovado', () => {
    const calculate = calcMedia(7,7,7);
    expect(calculate).to.be.equals('Aprovado');
  });
});

module.exports = { calcMedia };
