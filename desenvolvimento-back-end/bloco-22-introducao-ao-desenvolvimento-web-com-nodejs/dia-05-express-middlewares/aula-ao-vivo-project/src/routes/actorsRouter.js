const express = require('express');
const { getAll, getSearch, getById, addActor, editActor, deleteActor } = require('../services/actorServices');
const actorsRouter = express.Router();

actorsRouter.get('/', getAll);
actorsRouter.get('/q', getSearch);
actorsRouter.get('/:id', getById);
actorsRouter.post('/', addActor);
actorsRouter.put('/:id', editActor);
actorsRouter.delete('/:id', deleteActor);

module.exports = {
  actorsRouter
};
