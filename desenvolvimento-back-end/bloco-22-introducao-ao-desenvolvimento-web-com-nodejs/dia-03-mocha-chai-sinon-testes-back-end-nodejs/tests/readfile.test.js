const { readFile } = require('../readfile');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

describe('Chamando a função readFile', () => {
  const FILE_CONTENT = 'Stephen Strange'

  before(() => {
    sinon.stub(fs, 'readFile').resolves(FILE_CONTENT);
  });

  it('Retorna uma string', async () => {
    const readReturn = await readFile('strange.txt');
    expect(readReturn).to.be.a('string');
  });

  after(() => {
    fs.readFile.restore();
  })
})
