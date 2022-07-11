const connection = require('../helpers/connection');
const formatData = require('../helpers/formatData');
const pagination = require('../helpers/pagination');

const getAll = async (pageNumber) => {
  const getPage = pagination(pageNumber);

  if (pageNumber) {
    const [data] = await connection.execute(`
    SELECT film_id, title, rating, 
    description, language_id, 
    special_features, last_update 
    FROM sakila.film
    LIMIT 20
    OFFSET ?
    `, [getPage + '']);

    return data.map(formatData);
  }

  const [data] = await connection.execute(`
    SELECT film_id, title, rating, 
    description, language_id, 
    special_features, last_update 
    FROM sakila.film
    LIMIT 20
  `);

  return data.map(formatData);
};
const getSearch = async (query)=> {
  const [data] = await connection.execute(`
    SELECT film_id, title, rating, 
    description, language_id, 
    special_features, last_update 
    FROM sakila.film
    WHERE title LIKE ?
    LIMIT 20
  `, [query + '%']);

  return data.map(formatData);
};
const addMovie = async (newMovie) => {
  const { title, rating, description, 
    language_id, special_features } = newMovie;
  
  const data = await connection.execute(`
    INSERT INTO sakila.film 
    (title, rating, description, language_id, special_features) 
    VALUES
    (?, ?, ?, ?, ?)
  `, [title, rating, description, language_id, special_features]);

  return data;
};
const editMovie = async (movieId, movieEdited) => {
  const { title, rating, description,
    language_id, special_features } = movieEdited;
 
  const [data] = await connection.execute(`
    UPDATE sakila.film
    SET title = ?, rating = ?, description = ?,
    language_id = ?, special_features = ?
    WHERE film_id = ?
  `, [title, rating, description, language_id, special_features, movieId]);

  return data;
}
const deleteMovie = async (movieId) => {
  const [data] = await connection.execute(`
    DELETE FROM sakila.film
    WHERE film_id = ?
  `, [movieId]);

  return data;
}

module.exports = {
  getAll,
  getSearch,
  addMovie,
  editMovie,
  deleteMovie,
};
