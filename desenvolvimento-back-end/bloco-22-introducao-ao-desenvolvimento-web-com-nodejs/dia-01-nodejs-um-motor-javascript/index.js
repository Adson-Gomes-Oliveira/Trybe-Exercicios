const { femaleRandom } = require('dog-names');
const { sum, sub, mul, div } = require('./operacoes');
const rs = require('readline-sync');

console.log("Calculadora Simples");

const num1 = rs.questionInt("Digite um número: ");
const op = rs.question("Digite a operação (+, -, *, /): ");
const num2 = rs.questionInt("Digite um número: ");

switch (op) {
  case '+':
    sum(num1, num2)
    break;
  case '-':
    sub(num1, num2)
    break;
  case '*':
    mul(num1, num2)
    break;
  case '/':
    div(num1, num2)
    break;
  default:
    console.log("invalido");
    break;
}
