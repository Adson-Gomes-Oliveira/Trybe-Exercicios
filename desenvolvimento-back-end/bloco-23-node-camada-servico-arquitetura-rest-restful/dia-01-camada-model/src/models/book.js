const connection = require('./connection');

const getAllBooks = async () => {
  const [data] = await connection.execute('SELECT * FROM books');
  return data;
}

const getBookById = async (book_id) => {
  const [data] = await connection.execute(`SELECT * FROM books WHERE id = ${book_id}`);
  return data;
} 

const getByAuthorId = async (authorId) => {
  const [data] = await connection.execute(`SELECT * FROM books WHERE author_id = ${authorId}`)
  return data;
}

module.exports = { 
  getAllBooks,
  getBookById,
  getByAuthorId
};
