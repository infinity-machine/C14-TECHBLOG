// REQUIRES
require('dotenv').config();
const { Sequelize } = require('sequelize');
// CONNECTION
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});
// EXPORT
module.exports = connection;