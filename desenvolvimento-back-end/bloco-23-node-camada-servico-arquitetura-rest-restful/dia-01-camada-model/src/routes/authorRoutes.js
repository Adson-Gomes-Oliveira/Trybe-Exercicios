const express = require('express');
const authorServices = require('../services/authorServices');
const authorRouter = express.Router();

authorRouter.get('/', authorServices.getAll);
authorRouter.get('/:id', authorServices.getById);
authorRouter.post('/', authorServices.createNew)

module.exports = authorRouter;
