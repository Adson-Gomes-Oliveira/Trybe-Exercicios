const express = require('express');
const bookServices = require('../services/bookServices');
const bookRouter = express.Router();

bookRouter.get('/', bookServices.getAll);
bookRouter.get('/:id', bookServices.getById);

module.exports = bookRouter;
