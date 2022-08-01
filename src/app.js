const express = require('express');
const app = express();

const index = require('./routes/index');
const objectRoute = require('./routes/objectRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/object', objectRoute);

module.exports = app;