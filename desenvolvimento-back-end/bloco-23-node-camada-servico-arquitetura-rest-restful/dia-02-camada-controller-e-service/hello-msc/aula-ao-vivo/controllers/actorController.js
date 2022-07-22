const actorService = require('../services/actorService');
const httpCode = require('../helpers/httpCode');

const getAll = async (_req, res) => {
  try {
    const data = await actorService.getAll();
    res.status(httpCode.SUCESS).json(data);
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}
const getSearch = async (req, res) => {
  try {
    const { name } = req.query;
    const data = await actorService.getSearch(name);
    res.status(httpCode.SUCESS).json(data);
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}
const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await actorService.getByID(id);
    res.status(httpCode.SUCESS).json(data)
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}
const addData = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const data = await actorService.addData(firstName, lastName);
    res.status(httpCode.SUCESS).json(data);
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}
const editData = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const { id } = req.params;
    await actorService.editData(id, firstName, lastName);
    res.status(httpCode.SUCESS).json({ message: 'Successfully Edited!' });
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = actorService.deleteData(id);
    res.status(httpCode.SUCESS).json({ message: 'Successfully Deleted!' });
  } catch (error) {
    res.status(httpCode.INTERNAL_SERVER).json({ message: 'Process Failure' });
  }
}

module.exports = {
  getAll,
  getSearch,
  getByID,
  addData,
  editData,
  deleteData,
};
