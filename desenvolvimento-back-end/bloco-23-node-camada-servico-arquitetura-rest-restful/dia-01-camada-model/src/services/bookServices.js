const book = require('../models/book');

const getAll = async (req, res) => {
  const { author_id } = req.query;

  const data = (author_id) 
  ? await book.getByAuthorId(author_id)
  : await book.getAllBooks();

  res.status(200).json(data);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await book.getBookById(id);
  res.status(200).json(data);
}

module.exports = {
  getAll,
  getById
}
