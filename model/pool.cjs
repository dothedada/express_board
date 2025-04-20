const { Pool } = require('pg');

require('dotenv').config();

let newPool;

if (process.env.ENV == 'dev') {
    newPool = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        password: String(process.env.PASSWORD),
        database: process.env.DATABASE,
        port: 5432,
    });
} else {
    newPool = new Pool({
        connectionString: process.env.CONNECTION_STRING,
    });
}

module.exports = { newPool };
