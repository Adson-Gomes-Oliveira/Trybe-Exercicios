let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
}

console.log(
  'A jogadora ' +
    player.name +
    ' ' +
    player.lastName +
    ' tem ' +
    player.age +
    ' anos de idade.'
)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(
  'A jogadora ' +
    player.name +
    ' foi considerada a melhor do mundo ' +
    player.bestInTheWorld.length +
    ' vezes'
)

console.log(
  'A jogadora possui ' +
    player.medals.golden +
    ' medalhas de ouro e ' +
    player.medals.silver +
    ' medalhas de prata.'
)

console.log('-----------------------------')

let pizzas = {
  sabor: '4 Queijos',
  preco: 42.8,
  bordaCheedar: true
}

for (let index in pizzas) {
  console.log(pizzas[index])
}

let pizzasDoces = ['chocolate', 'morango', 'maçã']

for (let index in pizzasDoces) {
  console.log(index, pizzasDoces[index])
}

console.log('-----------------------------')

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}

for (let hello in names) {
  console.log('Olá ' + names[hello])
}

console.log('-----------------------------')

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (printer in car) {
  console.log(printer, car[printer])
}

console.log('-----------------------------')
