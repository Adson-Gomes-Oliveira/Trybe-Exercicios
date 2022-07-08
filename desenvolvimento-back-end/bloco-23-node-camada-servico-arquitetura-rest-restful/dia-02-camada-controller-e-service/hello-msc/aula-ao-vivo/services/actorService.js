const actorModel = require('../models/actorModel');

const getAll = async () => {
  const data = await actorModel.getAllData();
  if (!data) return [];

  return data;
}
const getSearch = async (firstName) => {
  if (firstName) {
    const data = await actorModel.getBySearch(firstName);
    return data;
  }

  return [];
}
const getByID = async (id) => {
  const data = await actorModel.getByID(id);
  if (!data) return [];

  return data;
}
const addData = async (firstName, lastName) => {
  if (firstName && lastName){
    const data = await actorModel.addData(firstName, lastName);
    return data;
  }

  return [];
}
const editData = async (id, firstName, lastName) => {
  const data = await actorModel.editData(id, firstName, lastName);
  if (data !== 1) return [];

  return data;
}
const deleteData = async (id) => {
  if (id) {
    const data = await actorModel.deleteData(id);
    return data;
  }

  return [];
}

module.exports = {
  getAll,
  getSearch,
  getByID,
  addData,
  editData,
  deleteData,
}
