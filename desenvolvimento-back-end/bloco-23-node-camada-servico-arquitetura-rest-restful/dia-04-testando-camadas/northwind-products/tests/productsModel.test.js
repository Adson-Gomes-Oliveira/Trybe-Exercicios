const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../helpers/connection');
const productsModel = require('../models/productsModel');

describe('Insere um novo produto no BD', () => {
  const payloadProduct = {
    productCode: 'NWTS-3',
    productName: 'Northwind Traders Robots',
    standardCost: 5000.0000,
    listPrice: 8500.000,
    reorderLevel: 10,
    targetLevel: 20,
    quantityPerUnit: '1 robot',
    category: 'Technology',
  };

  before(async () => {
    const execute = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando o produto é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.be.an('object');
    });

    it('retorna um objeto com novo "id" inserido no banco', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.have.a.property('id');
    });
  });
});
