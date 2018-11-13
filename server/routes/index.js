const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');
const db = require("./helper");
require("dotenv").config();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(
      __dirname, '..', '..', 'dist', 'index.html'));
  });

// add user to db
router.post('/api/v1/spacecats', (req, res, next) => {
  db(`INSERT INTO users (email, results) VALUES ('${req.body.email}', '${req.body.results}') RETURNING *;`)
  .then(results => results.error
    ? res.status(404).send({error: results.error})
    : res.send({body: results.data})
  )
});

router.get('/api/v1/spacecats/results', (req, res, next) => {  

    const getData = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        res.send(json.petfinder.pets.pet)
      } catch (error) {
        res.send(error)
      }
    };  
  
    db(`SELECT breeds.name FROM breeds INNER JOIN users ON breeds.code = users.results WHERE users.id = '${req.query.id}';`)
    .then(results => {
      if (results.error) {
        res.status(404).send({error: results.error})
      } else {
        const url = `http://api.petfinder.com/pet.find?key=${process.env.PETFINDER_API}&location=New York&breed=${results.data[0].name}&count=4&format=json`;
        getData(url);
      }
    })    
});






// router.post('api/v1/spacecats', (req, res, next) => {
//     db(`INSERT INTO users (email) VALUES ();`)
// });

module.exports = router;