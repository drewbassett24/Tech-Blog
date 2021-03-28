const express = require('express');
// const routes = require('./route');
const sequelize = require('./config/connection');
// const Blogclear = require('./models');

const PORT = 3307;

const app = express();

// app.use(routes);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
// });