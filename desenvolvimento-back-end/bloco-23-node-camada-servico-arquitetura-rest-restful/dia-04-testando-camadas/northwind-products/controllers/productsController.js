const services = require('../services/productsService');

const create = async (req, res) => {
  const { productCode, productName,
    standardCost, listPrice, reorderLevel, targetLevel,
    quantityPerUnit, category } = req.body;
  
  const response = await services.create({ productCode, productName,
    standardCost, listPrice, reorderLevel, targetLevel,
    quantityPerUnit, category });

  if (!response) return { status: 400, message: 'Error on create product' };

  res.status(200).json(response);
  return { status: 200, data: response };
}

module.exports = {
  create,
}
