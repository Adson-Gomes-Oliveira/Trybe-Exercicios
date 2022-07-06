const connection = require('./connection');

const addFullName = (author) => {
  if (author.middle_name === null) {
    author.full_name = `${author.first_name} ${author.last_name}`;
    return author;
  }

  author.full_name = `${author.first_name} ${author.middle_name} ${author.last_name}`;
  return author;
}

const getAllAuthors = async () => {
  const [data] = await connection.execute('SELECT * FROM authors');
  return data.map(addFullName);
}

const getAuthorsById = async (author_id) => {
  const [data] = await connection.execute(`SELECT * FROM authors WHERE id = ${author_id}`);
  return data.map(addFullName);
}

const isValid = (firstName, _middleName, lastName, nationality) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof firstName !== 'string') return false;
  if (!nationality || typeof firstName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName, nationality) => {
  connection.execute(
    `INSERT INTO authors (first_name, middle_name, last_name, nationality) VALUES
      ('${firstName}', '${middleName}', '${lastName}', '${nationality}')`
  );
}

module.exports = {
  getAllAuthors,
  getAuthorsById,
  createAuthor
};
