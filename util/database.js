const Sequelize = require('sequelize');

const { DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD } = require('../config')

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


// const mysql = require('mysql2');


// const pool = mysql.createPool({
//     host: 'localhost',
//     user: DATABASE_USER,
//     database: DATABASE_NAME,
//     password: DATABASE_PASSWORD
// });

// module.exports = pool.promise();