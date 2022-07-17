const services = require('../services/movieService');
const httpStatus = require('../helpers/httpCodes');

const getAll = async (_req, res, next) => {
  try {
    const data = await services.getAll();
    if (data.message) {
      return next({ message: data.message, status: data.code, code: data.code });
    };
    
    res.status(data.code).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  };
};
const getSearch = async (req, res, next) => {
  try {
    const { title } = req.query;
    const data = await services.getSearch(title);
    
    if (data.message) {
      return next({ message: data.message, status: data.status, code: data.code });
    }
  
    res.status(httpStatus.OK).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  }
}
const getPage = async (req, res, next) => {
  try {
    const { page } = req.params;
    const data = await services.getPage(Number(page));
    if (data.message) {
      return next({ message: data.message, status: data.code, code: data.code });
    };
    
    res.status(data.code).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  }
}
const addMovie = async (req, res, next) => {
  try {
    const { title, rating, description, language_id, special_features } = req.body;
    const newMovie = { title, rating, description, language_id, special_features };
    const data = await services.addMovie(newMovie);
    if (data.message) {
      return next({ message: data.message, status: data.code, code: data.code });
    };
    
    res.status(data.code).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  }
}
const editMovie = async (req, res, next) => {
  try {
    const { title, rating, description, language_id, special_features } = req.body;
    const movieEdited = { title, rating, description, language_id, special_features };
    const { id } = req.params;
    const data = await services.editMovie(Number(id), movieEdited);

    if (data.message) {
      return next({ message: data.message, status: data.status, code: data.code });
    }

    res.status(data.code).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  }
}
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await services.deleteMovie(Number(id));

    if (data.message) {
      return next({ message: data.message, status: data.status, code: data.code });
    }

    res.status(data.status).json(data.result);
  } catch (error) {
    return next({ message: error, status: httpStatus.INTERNAL_ERROR });
  }
}

module.exports = {
  getAll,
  getSearch,
  getPage,
  addMovie,
  editMovie,
  deleteMovie,
};
