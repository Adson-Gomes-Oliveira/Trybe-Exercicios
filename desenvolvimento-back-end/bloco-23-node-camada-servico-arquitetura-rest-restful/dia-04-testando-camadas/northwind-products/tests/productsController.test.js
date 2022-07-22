const { expect } = require('chai');
const sinon = require('sinon');
const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('../controllers/productsController');

describe('Lida com a requisição para criar um produto', () => {
  describe('Quando a requisição for bem sucedida', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    })

    it('Deve retornar um status code 200', async () => {
      const response = await productsController.create();
      expect(response.status).to.be.equal(200);
    });
    it('Deve retornar um array de produtos', async () => {
      const response = await productsController.create();
      expect(response.data).to.be.an('object');
    });
  });
  describe('Quando a requisição for mal sucedida', async () => {
    it('Deve retornar um status code 400', async () => {
      const response = await productsController.create();
      expect(response.status).to.be.equal(400);
    });
    it('Deve retornar uma mensagem de erro', async () => {
      const response = await productsController.create();
      expect(response.message).to.be.equal('Error on create product');
    });
  });
});
