const express = require('express');
const ngrok = require('ngrok');

const { mongoose } = require('./startup/db.js');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

let url;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
require('./startup/routes.js')(app);

const port = 85;

(async () => {
  url = await ngrok.connect({ addr: port }, err => {
    console.log('err:', err);
  });
  console.log('URL => ', url);
})();

app.listen(port);

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.static('public'));
