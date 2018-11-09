const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/spacecats';

const client = new pg.Client(connectionString);
client.connect();

const query = client.query('CREATE TABLE planets(id serial PRIMARY KEY, name VARCHAR(40)); CREATE TABLE breeds(id serial PRIMARY KEY, name VARCHAR(40), description VARCHAR(1000)); CREATE TABLE users(id SERIAL PRIMARY KEY, email VARCHAR(40), results VARCHAR(4), planet_id INTEGER,  FOREIGN KEY (planet_id) REFERENCES planets (id)); CREATE TABLE results_to_planets(results VARCHAR(4), planet_id INTEGER, FOREIGN KEY (planet_id) REFERENCES planets (id), FOREIGN KEY (results) REFERENCES users (results)); CREATE TABLE planets_to_breeds(planet_id INTEGER, breed_id INTEGER, FOREIGN KEY (planet_id) REFERENCES planets (id), FOREIGN KEY (breed_id) REFERENCES breeds (id));');

query.on('end<', () => { client.end(); }); 