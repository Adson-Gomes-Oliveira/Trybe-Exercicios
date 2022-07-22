const connection = require('../helpers/connection');
const helper = require('../helpers/unionName');

const getAllData = async () => {
  const [data] = await connection.execute(
    `SELECT * FROM sakila.actor
    LIMIT 10`
  );

  return data.map(helper.unionName);
}

const getByID = async (id) => {
  const [data] = await connection.execute(
    `SELECT * FROM sakila.actor
    WHERE actor_id = ?`,
    [id]
  );

  return data.map(helper.unionName);
}

const getBySearch = async (name) => {
  const [data] = await connection.execute(
    `SELECT * FROM sakila.actor
    WHERE first_name = ?`,
    [name]
  );

  return data.map(helper.unionName);
}

const addData = async (firstName, lastName) => {
  const [data] = await connection.execute(
    `INSERT INTO sakila.actor (first_name, last_name) VALUES
    (?, ?)`,
    [firstName, lastName]
  );

  const result = {
    id: data.insertId,
    firstName,
    lastName,
  };

  return result;
}

const editData = async (id, firstName, lastName) => {
  await connection.execute(
    `UPDATE sakila.actor
    SET first_name= ?, last_name= ?
    WHERE actor_id = ?`,
    [firstName, lastName, id]
  );

  const result = {
    id,
    firstName,
    lastName,
  }

  return result;
}

const deleteData = async (id) => {
  await connection.execute(
    `DELETE FROM sakila.actor
    WHERE actor_id = ?`,
    [id]
  );

  return 'OK!'
}

module.exports = {
  getAllData,
  getByID,
  getBySearch,
  addData,
  editData,
  deleteData,
}
