const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middlewares/logger');
const users = require('./routes/users');
const books = require('./routes/books');
const mainPage = require('./routes/mainPage');
const errorPage = require('./routes/errorPage');

const { PORT, DB_URL } = process.env;
const app = express();

mongoose.connect(DB_URL);

app.use(bodyParser.json());
app.use(cors());

// app.use(logger);

app.use(mainPage);
app.use(users);
app.use(books);
app.use(errorPage);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}/`);
});
