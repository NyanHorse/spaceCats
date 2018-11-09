const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'),
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.contentType('application/json');
    next();
  });

app.use('/', routes);

app.listen(3000);
console.log('Listening on port 3000...');