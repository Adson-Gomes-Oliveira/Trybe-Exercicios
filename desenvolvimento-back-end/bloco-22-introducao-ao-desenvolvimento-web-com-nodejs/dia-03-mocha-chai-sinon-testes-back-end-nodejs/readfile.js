const fs = require('fs').promises;

const readFile = async (filename) => {
  try {
    const data = await fs.readFile(`./${filename}`, 'utf-8');
    return data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  readFile
}
