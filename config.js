const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD
};