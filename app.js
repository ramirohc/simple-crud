require('dotenv').config();
const express = require('express');
const db = require('./db');

const usersController = require('./api/controllers/users.controller');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', usersController);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
