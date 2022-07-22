const express = require('express');
const bodyParser = require('body-parser');
const actor = require('./routes/actorRoutes');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use('/actor', actor.actorRouter);

app.listen(Number(process.env.APP_PORT),
() => console.log(`Hearing port: ${Number(process.env.APP_PORT)}`))
