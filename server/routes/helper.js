const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/spacecats';

module.exports = async function getData(query) {
  const data = [];
  let error = null;

  await new Promise((resolve, reject) => {
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done(); //kills the pg connection
        error = err; //store the error it came back with
        resolve(); // finish the promise
      }
      // Create SQL query
      const q = client.query(query);
      // Stream data back one row at a time
      q.on('row', (row) => { // get the info row by row
        data.push(row);
      });
      // After all data is returned, close connection and resolve promise
      q.on('end', () => { 
        done(); 
        resolve();
      });
    });
  });

  return { data, error }; //this waits until await is

};
