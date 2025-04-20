#! usr/bin/env node

const { Client } = require('pg');

const sql = `
CREATE TABLE IF NOT EXISTS messages (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	msg VARCHAR(300),
	username VARCHAR(50),
	date TIMESTAMP WITH TIME ZONE
);

INSERT INTO messages (msg, username, date)
VALUES
	('test message 666', 'mmejia', NOW())
;
`;

async function main() {
    console.log('seeding...');

    require('dotenv').config();

    const client = new Client({
        connectionString: process.env.CONNECTION_STRING,
    });

    await client.connect();
    await client.query(sql);
    await client.end();

    console.log('done');
}

main();
