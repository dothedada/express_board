const { Pool } = require('pg');

if (process.env.ENV == 'dev') {
    console.log(process.env.ENV);
}

require('dotenv').config();

const newPool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: String(process.env.PASSWORD),
    database: process.env.DATABASE,
    port: 5432,
});

module.exports = { newPool };
