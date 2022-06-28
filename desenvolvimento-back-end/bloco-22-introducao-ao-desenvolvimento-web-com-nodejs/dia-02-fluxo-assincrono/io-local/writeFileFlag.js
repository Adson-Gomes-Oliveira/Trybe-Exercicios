const fs = require('fs').promises;

fs.writeFile('./example-4.txt', 'Learning new fs Flags :rocket:', { flag: 'wx' })
  .then(() => console.log('Arquivo Salvo'))
  .catch((err) => console.log(`Arquivo já existe: ${err}`));
