const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const fileHandler = require('./index');

const ARCHIVE_NAME = 'test-file.txt';
const NO_ARCHIVE_NAME = 'no_arch.txt';
const ARCHIVE_CONTENT = 'Aqui tem conteúdo!';
const SECOND_CONTENT = 'Segunda onda de testes!';

describe('Testa função de leitura de arquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFile').returns(ARCHIVE_CONTENT);
    });

    after (() => {
      fs.readFile.restore();
    });

    it('Testa se a função retorna uma string', async () => {
      const result = await fileHandler.readFile(ARCHIVE_NAME);
      expect(result).to.be.a('string');
    });

    it('Testa se a função retorna a string esperada', async () => {
      const result = await fileHandler.readFile(ARCHIVE_NAME);
      expect(result).to.be.equals(ARCHIVE_CONTENT);
    });
  });
  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon.stub(fs, 'readFile')
      .throws(new Error('File not found!'));
    });

    after(() => {
      fs.readFile.restore();
    });

    it('Testa se a função retorna null', async () => {
      const result = await fileHandler.readFile(NO_ARCHIVE_NAME);
      expect(result).to.be.a('null');
    });
  });
});

describe('Testa função de escrita de arquivo', () => {
  describe('Se o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').returns();
      sinon.stub(fs, 'readFile').returns(SECOND_CONTENT);
    })

    after(() => {
      fs.writeFile.restore();
      fs.readFile.restore();
    })

    it('Testa se um arquivo válido é criado', async () => {
      const result = await fileHandler.writeFile(ARCHIVE_NAME, SECOND_CONTENT);
      expect(result).to.be.a('string');
    });

    it('Testa se o conteudo do arquivo é correto', async () => {
      const result = await fileHandler.writeFile(ARCHIVE_NAME, SECOND_CONTENT);
      expect(result).to.be.equals(SECOND_CONTENT);
    });
  });
});