const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { actorsRouter } = require('../src/routes/actorsRouter');
const { authMiddleware, errorMiddleware } = require('../src/middlewares/index');
const app = express();

app.use(bodyParser.json());
app.use(authMiddleware)
app.use('/actor', rescue(actorsRouter));
app.use(errorMiddleware);

app.listen(3001, () => console.log('Hearing port: 3001'));
