const imc = require('./imc');
const rs = require('readline-sync');
const fs = require('fs');

console.log('==========================');
console.log('Calculadora de IMC');
console.log('==========================');
const askName = () => rs.question('Qual é seu nome? -> ');
const askHeight = () => rs.questionFloat('Digite sua altura: ');
const askWeight = () => rs.questionFloat('Digite seu peso: ');

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = imc(height, weight);
fs.appendFileSync('imc.txt', `O IMC de ${name} é: ${result}\n`);
const data = fs.readFileSync('./imc.txt', {encoding: 'utf-8', flag: 'r'});

console.log('==========================');
console.log(data);
