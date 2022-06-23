const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./example-3.txt', 'Learning Async Node With Async/Await');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
