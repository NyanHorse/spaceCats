const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/spacecats';

const client = new pg.Client(connectionString);
client.connect();

const query = client.query('CREATE TABLE breeds(id serial PRIMARY KEY, name VARCHAR(40), description VARCHAR(1000), code VARCHAR(4)); CREATE TABLE users(id SERIAL PRIMARY KEY, email VARCHAR(40), results VARCHAR(4));');

query.on('end<', () => { client.end(); });  