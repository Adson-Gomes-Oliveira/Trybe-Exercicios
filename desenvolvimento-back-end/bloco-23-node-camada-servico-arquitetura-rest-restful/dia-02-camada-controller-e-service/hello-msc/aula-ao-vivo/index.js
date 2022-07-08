const express = require('express');
const bodyParser = require('body-parser');
const actor = require('./routers/actorRouter');
const authentication = require('./middlewares/authMiddleware');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(authentication.authMiddleware);
app.use('/actor', actor.router);

app.listen(Number(process.env.APP_PORT),
() => console.log(`Hearing port: ${Number(process.env.APP_PORT)}`))
