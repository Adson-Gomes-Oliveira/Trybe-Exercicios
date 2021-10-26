const imcCalculator = require('./script');

describe('Testa função que calcula o IMC', () => {
  it ('Testa se ao fornecer um peso e altura a função tem o comportamento esperado', () => {
    expect(imcCalculator(90, 180)).toBe('Seu IMC é: 27.777777777777775');
  });

  it ('Testa se ao não fornecer informações uma mensagem é exibida', () => {
    expect(imcCalculator()).toThrow();
  })
});