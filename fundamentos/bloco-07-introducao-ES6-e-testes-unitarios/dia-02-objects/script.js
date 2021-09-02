const adress = {
  houseNumber: 25,
  streetAvenue: 'Caminho 10'
}

console.log(adress);

const trial = (objeto, chave, valor) => {
  let newKey = chave;
  objeto[newKey] = valor;

  return adress
}

console.log(trial(adress, 'CEP', 45052196));