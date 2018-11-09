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
    const url = `http://api.petfinder.com/pet.find?key=${process.env.PETFINDER_API}&location=Minnesota&format=json`;

    const getData = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        res.send(json)
      } catch (error) {
        // send error here
      }
    };

    getData(url);
});


// router.post('api/v1/spacecats', (req, res, next) => {
//     db(`INSERT INTO users (email) VALUES ();`)
// });

module.exports = router;