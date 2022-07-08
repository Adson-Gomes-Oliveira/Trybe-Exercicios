const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/', actorController.getAll);
router.get('/search', actorController.getSearch);
router.get('/:id', actorController.getByID);
router.post('/', actorController.addData);
router.put('/:id', actorController.editData);
router.delete('/:id', actorController.deleteData);

module.exports = {
  router,
}
