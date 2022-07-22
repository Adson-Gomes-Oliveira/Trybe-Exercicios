const author = require('../models/author');

const getAll = async (_req, res) => {
  const data = await author.getAllAuthors();
  res.status(200).json(data);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await author.getAuthorsById(id);
  res.status(200).json(data);
}

const createNew = async (req, res) => {
  const { firstName, middleName, lastName, nationality } = req.body;
  await author.createAuthor(firstName, middleName, lastName, nationality);
  res.status(201).json({ message: 'New author successfully created!' })
}

module.exports = {
  getAll,
  getById,
  createNew
}
