const fs = require('fs').promises;

const archName = 'example.txt';

fs.readFile(archName, 'utf-8')
  .then((data) => console.log(`Conteúdo do arquivo: ${data}`))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  })
