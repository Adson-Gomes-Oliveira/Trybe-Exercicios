const products = require('../models/productsModel');
const validate = require('../schemas/productsValidation');

const create = async (payloadProduct) => {
  const verify = validate.create(payloadProduct);
  if (!verify) return false;

  const request = await products.create(payloadProduct);
  return {
    id: request.id,
  };
};

module.exports = {
  create,
};
