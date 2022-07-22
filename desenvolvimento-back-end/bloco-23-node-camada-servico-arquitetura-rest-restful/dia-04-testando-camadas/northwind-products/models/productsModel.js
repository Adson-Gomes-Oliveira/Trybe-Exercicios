const connection = require('../helpers/connection');

const create = async ({ productCode, productName,
standardCost, listPrice, reorderLevel, targetLevel,
quantityPerUnit, category }) => {
  const [request] = await connection.execute(`
    INSERT INTO northwind.products
    (product_code, product_name, standard_cost, 
      list_price, reorder_level, target_level, 
      quantity_per_unit, category)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [productCode, productName,
    standardCost, listPrice, reorderLevel, targetLevel,
    quantityPerUnit, category]);

  return {
    id: request.insertId,
  };
};

module.exports = {
  create,
}
