const boletimAdson = {
  port: 10,
  mat: 5,
  cien: 8,
  geo: 7.5,
  edf: 9,
  quim: 10,
  bio: 4
}

const exibirNota = () => {

  const arrayDeNotas = Object.keys(boletimAdson)

  for (const key in arrayDeNotas) {
    console.log(`A nota do aluno na matéria a seguir foi: ${arrayDeNotas[key]} = ${boletimAdson[arrayDeNotas[key]]}`);
  }
  return 'Completo'
}

console.log(exibirNota());