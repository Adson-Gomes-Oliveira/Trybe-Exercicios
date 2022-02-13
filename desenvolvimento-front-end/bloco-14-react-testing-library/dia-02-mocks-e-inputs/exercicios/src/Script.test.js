let randomNumber = () => {
  return Math.random() * (100 - 1) + 1;
};

let calculateChances = () => {
  const chance = randomNumber();
  return chance;
}

let winLose = () => {
  return calculateChances();
}

describe('Testando comportamentos com Mocks', () => {  // Função que engloba testes para uma visualização mais organizada.
  it('Testando se a função randomNumber retorna um valor', () => { // Função de teste do Jest.
    winLose = jest.fn().mockReturnValue(95); // ( winLose = ) -> Função criada anteriormente que será reatribuida. // ( jest.fn().mockReturnValue(95) ) -> Transforma a função com retorno imprevisível em uma mock, para que possam ser realizados testes controlados.
    winLose(15, 20); // Funçao, agora mockada, é chamada.

    expect(winLose).toHaveBeenCalled(); // É esperado que a função mockada seja chamada.
    expect(typeof winLose()).toBe('number'); // É esperado que o tipo do retorno da função mockada seja numeral.
  })

  it('Testando quantas vezes a função foi chamada', () => {
    winLose  = jest.fn();
    winLose();
    winLose();

    expect(winLose).toHaveBeenCalledTimes(2); // É esperado que a função mockada seja chamada ao menos 2 vezes.
  })

  it('Testando funcionalidade da função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(35);

    expect(calculateChances()).toBe(35); // É esperado que o retorno da função seja 35.
  })
})