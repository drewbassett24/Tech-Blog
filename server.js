const express = require('express');
const routes = require('./route');
const sequelize = require('./config/connection');
const Blogclear = require('./models');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});