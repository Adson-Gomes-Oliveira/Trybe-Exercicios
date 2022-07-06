const express = require('express');
const actorRouter = express.Router();
const services = require('../services/actorServices');

actorRouter.get('/', services.getAll);
actorRouter.get('/search', services.getSearch);
actorRouter.get('/:id', services.getByID);
actorRouter.post('/', services.addActor);
actorRouter.put('/:id', services.editActor);
actorRouter.delete('/:id', services.deleteActor);

module.exports = {
  actorRouter,
}
