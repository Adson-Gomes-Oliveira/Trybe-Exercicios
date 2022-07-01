const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const avengersRouter = require('./middleRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const logMiddleware = (req, res, next) => {
  const { token } = req.headers;

  if (!token || token !== 'i am iron men') return res.status(401).send('Token invalido!');

  console.log('Avengers Assemble');
  next();
};
const reqContents = (req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
};

app.use(logMiddleware);
app.use(reqContents);
app.use('/avengers', avengersRouter)

app.listen(3001, () => console.log('Escutando porta 3001'))
