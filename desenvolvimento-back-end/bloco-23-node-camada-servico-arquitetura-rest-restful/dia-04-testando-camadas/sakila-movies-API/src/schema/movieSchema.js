const httpStatus = require('../helpers/httpCodes');
const Joi = require('joi');

const verifyAllData = (data) => {
  const { error } = Joi.object({data: Joi.array().not().empty().required()}).validate({data});
  if (error) return { message: 'No data available !' + error, status: httpStatus.NOT_FOUND, code: httpStatus.NOT_FOUND };

  return {};
};
const verifyPageNumber = (pageNumber) => {
  const { error } = Joi.object({pageNumber: Joi.number().greater(0).required()}).validate({pageNumber});
  if (error) return ({
    message: 'Number is required and greater than 0',
    status: httpStatus.NO_CONTENT,
    code: httpStatus.NO_CONTENT,
  });

  return {};
};
const verifyDataPage = (data) => {
  const { error } = Joi.object({data: Joi.array().not().empty().required()}).validate({data});
  if (error) return { message: 'No data available !', status: httpStatus.NO_CONTENT, code: httpStatus.NO_CONTENT };

  return {};
};
const verifyMovieAddition = (newMovie) => {
  const { title, rating, description, 
    language_id, special_features } = newMovie;

  const { titleError } = Joi.object({ title: Joi.string().required() }).validate({title});
  const { ratingError } = Joi.object({ rating: Joi.string().max(5).required() }).validate({rating});
  const { descError } = Joi.object({ rating: Joi.string().min(10).required() }).validate({description});
  const { languageError } = Joi.object({ rating: Joi.number().greater(0).required() }).validate({language_id});
  const { featuresError } = Joi.object({ rating: Joi.string().required() }).validate({special_features});

  if (titleError) return { message: 'Title is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (ratingError) return { message: 'Rating [EUA] is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (descError) return {
    message: 'Description is required and must have more than 10 characters',
    status: httpStatus.BAD_REQUEST,
    code: httpStatus.BAD_REQUEST
  };
  if (languageError) return { message: 'Language is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (featuresError) return { message: 'Special Features is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };

  return {};
};
const verifySearch = (query) => {
  const { error } = Joi.object({ query: Joi.string().required() }).validate({query});
  if (error) return {
    message: 'The query is required and must have at least one character !',
    status: httpStatus.BAD_REQUEST,
    code: httpStatus.BAD_REQUEST
  };

  return {};
};
const verifyMovieEdit = (movieId, movieEdited) => {
  const { title, rating, description, 
    language_id, special_features } = movieEdited;

  const { idError } = Joi.object({ movieId: Joi.number().required() }).validate({movieId});
  const { titleError } = Joi.object({ title: Joi.string().required() }).validate({title});
  const { ratingError } = Joi.object({ rating: Joi.string().max(5).required() }).validate({rating});
  const { descError } = Joi.object({ rating: Joi.string().min(10).required() }).validate({description});
  const { languageError } = Joi.object({ rating: Joi.number().greater(0).required() }).validate({language_id});
  const { featuresError } = Joi.object({ rating: Joi.string().required() }).validate({special_features});

  if (idError) return { message: 'Invalid ID!', status: httpStatus.BAD_REQUEST,
  code: httpStatus.BAD_REQUEST };
  if (titleError) return { message: 'Title is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (ratingError) return { message: 'Rating [EUA] is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (descError) return {
    message: 'Description is required and must have more than 10 characters',
    status: httpStatus.BAD_REQUEST,
    code: httpStatus.BAD_REQUEST
  };
  if (languageError) return { message: 'Language is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };
  if (featuresError) return { message: 'Special Features is required', status: httpStatus.BAD_REQUEST, code: httpStatus.BAD_REQUEST };

  return {};
}
const verifyMovieDelete = (movieId) => {
  const { idError } = Joi.object({ movieId: Joi.number().required() }).validate({movieId});
  if (idError) return { message: 'Invalid ID!', status: httpStatus.BAD_REQUEST,
  code: httpStatus.BAD_REQUEST };

  return {};
}

module.exports = {
  verifyAllData,
  verifyPageNumber,
  verifyDataPage,
  verifyMovieAddition,
  verifySearch,
  verifyMovieEdit,
  verifyMovieDelete,
}
