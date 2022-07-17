const express = require('express');
const controllers = require('../controllers/movieController');
const router = express.Router();

router.get('/', controllers.getAll);
router.get('/search', controllers.getSearch);
router.get('/page/:page', controllers.getPage);
router.post('/', controllers.addMovie);
router.put('/:id', controllers.editMovie);
router.delete('/:id', controllers.deleteMovie);

module.exports = {
  router,
};
