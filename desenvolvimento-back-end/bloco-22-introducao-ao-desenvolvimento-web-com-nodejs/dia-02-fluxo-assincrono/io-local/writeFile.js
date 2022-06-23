const fs = require('fs').promises;

fs.writeFile('./example-2.txt', 'Learning Async Node')
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
