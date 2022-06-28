const fs = require('fs').promises;

Promise.all([
  fs.readFile('example.txt'),
  fs.readFile('example-2.txt'),
  fs.readFile('example-3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSize = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSize} bytes`);
  })
  .catch((err) => console.error(`Erro ao ler arquivos: ${err.message}`));
