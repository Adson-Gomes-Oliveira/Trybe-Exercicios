const JOI = require('joi');

const create = (payloadProduct) => {
  const { error } = JOI.object({ 
    productCode: JOI.string().required(),
    productName: JOI.string().required(),
    standardCost: JOI.number().required(),
    listPrice: JOI.number().required(),
    reorderLevel: JOI.number().required(),
    targetLevel: JOI.number().required(),
    quantityPerUnit: JOI.string().required(),
    category: JOI.string().required(),
   }).validate(payloadProduct);

  if (error) return false;
  return true;
};

module.exports = {
  create,
}
