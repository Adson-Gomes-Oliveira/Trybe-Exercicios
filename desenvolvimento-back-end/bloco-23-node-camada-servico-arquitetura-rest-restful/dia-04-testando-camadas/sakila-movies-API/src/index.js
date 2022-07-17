const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const movieRoutes = require('./routers/movieRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use('/movie', rescue(movieRoutes.router));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(errorMiddleware);

app.listen(Number(process.env.API_PORT), () => {
  return console.log(`Hearing at: ${Number(process.env.API_PORT)}`);
});
