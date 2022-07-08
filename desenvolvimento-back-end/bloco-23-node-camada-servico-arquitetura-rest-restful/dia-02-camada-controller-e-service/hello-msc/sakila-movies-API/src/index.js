const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const movieRoutes = require('./routers/movieRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config();
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use('/movie', rescue(movieRoutes.router));
app.use(errorMiddleware);

app.listen(Number(process.env.API_PORT), () => {
  return console.log(`Hearing at: ${Number(process.env.API_PORT)}`);
});
