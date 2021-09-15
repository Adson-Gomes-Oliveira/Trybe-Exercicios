// const alunos = ['Adson', 'Fernando', 'Luiz', 'Maicon']
// let nota = 1;

// const aprovado = (aluno, index) => {
//   nota = Math.random(nota);
//   console.log(alunos[index] = `${aluno} atingiu a nota de: ${nota}`);
// }

// console.log(alunos.forEach(aprovado));

// const numbers = [19, 60, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;


// console.log(numbers.find(findDivisibleBy3And5))

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (name) => name.length === 5

// console.log(names.find(findNameWithFiveLetters));

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   return musicas.find((musica) => musica.id === id);
// }

// console.log(findMusic('31031685'))

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('M', listNames));
// console.log(verifyFirstLetter('W', listNames)); 

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Aprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const naturals = [1, 2, 3, 4, 5];

// const verifyNumbers = (arrayToBeVerified) => arrayToBeVerified.every((number) => number % number === 0);

// console.log(verifyNumbers(naturals)); // true

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((atualName) => name === atualName)
// }

// console.log(hasName(names, 'Ana'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((person) => person.age === 18 || person.age > 18)
// }

// console.log(verifyAges(people, 18));

// const food = ['Adson', 'Maicon', 'Beatriz', 'Sergio', 'Fernando'];
// food.sort();
// console.log(food);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35];
// numbers.sort();
// console.log(numbers);

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);