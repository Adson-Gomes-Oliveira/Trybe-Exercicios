const { expect } = require('chai');
const sinon = require('sinon');
const { writeFile, questionUser } = require('./index');
const readline = require('readline-sync');
const fs = require('fs').promises;

describe('Testando a interação do usuário', () => {
  const ARCHIVE_CONTENT = `
    Meu nome é Adson.
    Estou me sentindo Feliz hoje.

    Meu dia foi:
    Bom
  `;

  before(() => {
    sinon.stub(readline, 'question')
    .onCall(0).returns('Adson')
    .onCall(1).returns('Feliz')
    .onCall(2).returns('Bom');
    sinon.stub(fs, 'writeFile');
    sinon.stub(fs, 'readFile').returns(ARCHIVE_CONTENT);
  });

  after(() => {
    readline.question.restore();
    fs.writeFile.restore();
    fs.readFile.restore();
  });

  it('Testando retorno das perguntas', () => {
    const result = questionUser();
    expect(result.firstAnswer).to.be.equal('Adson');
    expect(result.secondAnswer).to.be.equal('Feliz');
    expect(result.thirdAnswer).to.be.equal('Bom');
  });

  it('Testando o arquivo gerado', async () => {
    const result = await writeFile();
    expect(result.fullText).to.be.equal(ARCHIVE_CONTENT);
  })
});
