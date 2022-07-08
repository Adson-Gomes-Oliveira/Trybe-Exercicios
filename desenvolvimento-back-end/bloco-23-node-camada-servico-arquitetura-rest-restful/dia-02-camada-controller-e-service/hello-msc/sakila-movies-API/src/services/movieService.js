const database = require('../models/movieModel');
const httpStatus = require('../helpers/httpCodes');
const validations = require('../schema/movieSchema');

const getAll = async () => {
  const data = await database.getAll();
  const verify = validations.verifyAllData(data);
  if (verify.message) return verify;

  return { result: data, code: httpStatus.OK };
};
const getPage = async (pageNumber) => {
  const verifyNumber = validations.verifyPageNumber(pageNumber);
  if (verifyNumber.message) return verifyNumber;

  const data = await database.getAll(pageNumber);
  const verify = validations.verifyDataPage(data);
  if (verify.message) return verify;

  return { result: data, code: httpStatus.OK };
};
const getSearch = async (query) => {
  const verify = validations.verifySearch(query);
  if (verify.message) return verify;

  const data = await database.getSearch(query);

  return { result: data, code: httpStatus.OK };
};
const addMovie = async (newMovie) => {
  const verify = validations.verifyMovieAddition(newMovie);
  if (verify.message) return verify;

  const data = await database.addMovie(newMovie);

  return { result: data, code: httpStatus.OK };
};

module.exports = {
  getAll,
  getPage,
  addMovie,
  getSearch,
};
