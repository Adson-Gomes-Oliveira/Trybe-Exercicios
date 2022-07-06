const database = require('../model/actorModel');

const getAll = async (_req, res) => {
  const data = await database.getAllData();
  res.status(200).json(data);
};

const getSearch = async (req, res) => {
  const { name } = req.query;
  
  const data = await database.getBySearch(name);

  res.status(200).json(data);
}

const getByID = async (req, res) => {
  const { id } = req.params;

  const data = await database.getByID(id);
  res.status(200).json(data);
}

const addActor = async (req, res) => {
  const { firstName, lastName } = req.body;
  const data = await database.addData(firstName, lastName);

  data.request_result = 'Successfully Added';

  res.status(200).json(data);
}

const editActor = async (req, res) => {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  const data = await database.editData(id, firstName, lastName);

  data.request_result = 'Successfully Edited';

  res.status(200).json(data);
}

const deleteActor = async (req, res) => {
  const { id } = req.params;

  await database.deleteData(id);

  res.status(204).end();
}

module.exports = {
  getAll,
  getByID,
  addActor,
  getSearch,
  editActor,
  deleteActor,
}
