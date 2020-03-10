require('dotenv').config();
var express = require('express');
var router = express.Router();
var { Application } = require('../models/application.model');
var auth = require('../middleware/auth');
const { cfPush } = require('./cf-push');
const { updateTitles } = require('../temp-web-site/update-title');
const { exec } = require('child_process');

const lowCodeAppName = 'low-code-app';
const appPath = '../temp-web-site/web-site/public';

let applicationObject = new Object();

router.get('/test', (req, res) => {
  return res.status(200).send('hey');
});

router.post('/create', (req, res) => {
  console.log('started create');
  const pageTitle = req.body.queryResult.outputContexts[0].parameters.title;
  console.log(pageTitle);

  updateTitles('./temp-web-site/config.toml', pageTitle);

  exec(`bash initiate-hugo.sh`, (error, stdout, stderr) => {
    console.log('started initiate-hug');
    if (error) {
      console.log(`error: ${error.message}`);
      return errorCallback({ error: `error: ${error.message}` });
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return errorCallback({ error: `stderr: ${stderr}` });
    }
    console.log(`stdout: ${stdout}`);
    cfPush(
      appPath,
      lowCodeAppName,
      url => {
        console.log('URL=>', url);
      },
      err => {
        console.log('error', err);
      }
    );

    return res.status(200).send('created');
  });
});

router.post('/add', async (req, res) => {
  try {
    applicationObject.append(req.body);

    if (result) {
      res.status(200).send('Appended Successfully!');
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;
