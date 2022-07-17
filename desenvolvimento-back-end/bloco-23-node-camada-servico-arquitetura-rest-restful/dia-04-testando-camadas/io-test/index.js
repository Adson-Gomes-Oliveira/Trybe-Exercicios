const fs = require('fs').promises;

const readFile = async (fileName) => {
  try {
    const read = await fs.readFile(fileName, { encoding: 'utf-8' });
    return read;
  } catch (error) {
    return null;
  }
};
const writeFile = async (fileName, content) => {
  try {
    await fs.writeFile(fileName, content, { flag: 'wx' });
    const result = await fs.readFile(fileName, { encoding: 'utf-8' });
    return result;
  } catch (error) {
    return null;
  }
}

module.exports = {
  readFile,
  writeFile,
};
