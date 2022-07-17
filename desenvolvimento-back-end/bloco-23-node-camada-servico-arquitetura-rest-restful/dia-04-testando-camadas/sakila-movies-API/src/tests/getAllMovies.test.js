const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../helpers/connection');
const movieModel = require('../models/movieModel');

const MOVIE_PAGE_AMOUNT = 20;

describe('Lista filmes do Banco de Dados', () => {
  describe('Quando a requisição padrão é feita', () => {
    before(async () => {
      const execute = [];
      for (let obj = 0; obj < MOVIE_PAGE_AMOUNT; obj ++) return execute.push({});
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });
    
    it('retorna um array', async () => {
      const result =  await movieModel.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna 20 filmes', async () => {
      const result =  await movieModel.getAll();
      expect(result.length).to.be.equal(MOVIE_PAGE_AMOUNT);
    });
  });

  describe('Quando é feita requisição por página', () => {
    before(async () => {
      const execute = [];
      for (let obj = 0; obj < MOVIE_PAGE_AMOUNT; obj ++) return execute.push({});
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      await connection.execute.restore();
    });

    it('retorna um array', async () => {
      const result =  await movieModel.getAll(2);
      expect(result).to.be.an('array');
    });
    it('retorna 20 filmes', async () => {
      const result =  await movieModel.getAll(2);
      expect(result.length).to.be.equal(MOVIE_PAGE_AMOUNT);
    });
  });

  describe('Quando a página não possui filmes', () => {
    before(async () => {
      const execute = [];
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });

    it('retorna um array vazio', async () => {
      const result =  await movieModel.getAll(1000);
      expect(result).to.be.an('array');
      expect(result.length).to.be.equal(0);
    });
  });
});
