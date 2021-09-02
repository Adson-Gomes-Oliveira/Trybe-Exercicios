// const boletimAdson = {
//   port: 10,
//   mat: 5,
//   cien: 8,
//   geo: 7.5,
//   edf: 9,
//   quim: 10,
//   bio: 4
// }

// const exibirNota = () => {

//   const arrayDeNotas = Object.keys(boletimAdson)

//   for (const key in arrayDeNotas) {
//     console.log(`A nota do aluno na matéria a seguir foi: ${arrayDeNotas[key]} = ${boletimAdson[arrayDeNotas[key]]}`);
//   }
//   return 'Completo'
// }

// console.log(exibirNota());

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for (skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for (index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

const profile = {

}

const fullName = {
  firstName: 'Adson',
  middleName: 'Gomes',
  lastName: 'Oliveira'
}

const age = {
  age: 20,
  yearOfBirthday: 2000,
  birthdayMonth: 'Outubro'
}

const preferences = {
  music: 'Rock',
  secondMusic: 'Rap',
  movies: 'Fantasy',
  secondMovies: 'Action',
  thingsHeLikes: 'code'
}

const allThings = Object.assign(profile, fullName, age, preferences);

console.log(profile);