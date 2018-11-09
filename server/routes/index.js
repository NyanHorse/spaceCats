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

router.get('/api/v1/spacecats/results', (req, res, next) => {
    fetch(`http://api.petfinder.com/pet.find?key=${process.env.PETFINDER_API}&location=Minnesota&format=json`)
    .then(function(response) {
        console.log(response);
        res.send(response);
        //return response.json();
    })
    .catch(function(error) {
        res.send(error);
    })
});


// router.post('api/v1/spacecats', (req, res, next) => {
//     db(`INSERT INTO users (email) VALUES ();`)
// });

module.exports = router;