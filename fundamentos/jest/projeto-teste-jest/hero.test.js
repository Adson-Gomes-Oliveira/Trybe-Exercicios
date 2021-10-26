const getSuperHero = require('./hero');

test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  const error = await getSuperHero();
  expect(error).toMatch('erro');
});