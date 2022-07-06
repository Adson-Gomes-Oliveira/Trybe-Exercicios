const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const router = require('./routes/index');
const middlewares = require('./middlewares/index');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(middlewares.authMiddleware);
app.use('/author', rescue(router.authorRouter));
app.use('/book', rescue(router.bookRouter));
app.use(middlewares.errorMiddleware);

app.listen(port, () => console.log(`Hearing port: ${port}`));
