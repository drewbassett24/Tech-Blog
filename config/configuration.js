const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize (
    process.env.DB_Name,
    process.env.DB_Password,
    process.env.DB_User,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3307
    }
);

module.exports = sequelize;
