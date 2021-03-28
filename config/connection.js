const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
  }
);

module.exports = sequelize;
