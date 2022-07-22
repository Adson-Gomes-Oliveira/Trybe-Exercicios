const readline = require('readline-sync');
const fs = require('fs').promises;

const questionUser = () => {
  const firstAnswer = readline.question('Digite seu nome: ');
  const secondAnswer = readline.question('Como você está se sentindo hoje? ');
  const thirdAnswer = readline.question('Me conte sobre seu dia: ');

  return { firstAnswer, secondAnswer, thirdAnswer };
}

const writeFile = async () => {
  const { firstAnswer, secondAnswer, thirdAnswer } = questionUser();
  const myDay = `
    Meu nome é ${firstAnswer}.
    Estou me sentindo ${secondAnswer} hoje.

    Meu dia foi:
    ${thirdAnswer}
  `
  await fs.writeFile('./my-day.txt', myDay, {flag: 'wx'});
  const fullText = await fs.readFile('./my-day.txt', {encoding: 'utf-8'});
  return { firstAnswer, secondAnswer, thirdAnswer, fullText };
}

module.exports = {
  questionUser,
  writeFile,
};
