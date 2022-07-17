const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../models/productsModel');
const productsService = require('../services/productsService');

describe('Valida o novo produto inserido no BD', () => {
  before(() => {
    const ID_EXAMPLE = 1;
    sinon.stub(productsModel, 'create').resolves({ id: ID_EXAMPLE });
  });

  after(() => {
    productsModel.create.restore();
  });

  describe('Quando o payload informado não é válido', () => {
    const payloadProduct = {};

    it('retorna um boolean', async () => {
      const response = await productsService.create(payloadProduct);
      expect(response).to.be.a('boolean');
    });
    it('o boolean contem "false"', async () => {
      const response = await productsService.create(payloadProduct);
      expect(response).to.be.equal(false);
    });
  });
  describe('Quando é inserido com sucesso', () => {
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

    it('retorna um objeto', async () => {
      const response = await productsService.create(payloadProduct);
      expect(response).to.be.a('object');
    });
    it('o objeto possui o "id" do novo produto inserido', async () => {
      const response = await productsService.create(payloadProduct);
      expect(response).to.have.property('id');
    })
  });
});
