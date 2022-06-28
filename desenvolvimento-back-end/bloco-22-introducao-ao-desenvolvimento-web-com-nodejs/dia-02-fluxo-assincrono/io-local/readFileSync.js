const fs = require('fs');

const archName = 'example.txt';

try {
  const data = fs.readFileSync(archName, 'utf-8');
  console.log(data);
} catch (e) {
  console.error(`Erro ao ler o arquivo: ${e.path}`);
  console.log(e);
}
