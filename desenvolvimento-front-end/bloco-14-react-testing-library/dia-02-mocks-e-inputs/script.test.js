let CHANCE_BASE = 2;

function randomNumber () {
  const number = Math.random() * (100 - 1) + 1;
  return number;
};

function calculateChances () {
  CHANCE_BASE = randomNumber() / CHANCE_BASE;
  const chance = randomNumber();
  return chance;
}

function winLose () {
  return calculateChances();
}

describe('Testando comportamentos com Mocks', () => {
  it('Testando se a função randomNumber retorna um valor', () => {
    const random = randomNumber.jest.fn();

    expect(random).toHaveBeenCalled();
  })
})