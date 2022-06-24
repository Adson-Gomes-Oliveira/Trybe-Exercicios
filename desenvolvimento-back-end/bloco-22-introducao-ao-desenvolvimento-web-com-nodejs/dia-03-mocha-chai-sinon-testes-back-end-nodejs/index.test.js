const { expect } = require('chai');
const convertAge = require('./index');

describe(`Quando a idade for 10 retorna os resultados corretos`, () => {
  const AGE = 10;

  it('Quando a idade for 10 em minutos', () => {
    const minutes = convertAge.ageInMinutes(AGE);
    expect(minutes).equals(63072000);
  })
  it('Quando a idade for 10 em horas', () => {
    const hours = convertAge.ageInHours(AGE);
    expect(hours).equals(1051200);
  })
  it('Quando a idade for 10 em dias', () => {
    const days = convertAge.ageInDays(AGE);
    expect(days).equals(43800);
  })
  it('Quando a idade for 10 em meses', () => {
    const months = convertAge.ageInMonths(AGE);
    expect(months).equals(120);
  })
})
