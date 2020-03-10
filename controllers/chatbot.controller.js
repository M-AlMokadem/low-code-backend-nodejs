var express = require('express');
var router = express.Router();

router.get('/test', (req, res) => {
  return res.status(200).send('hey');
});

router.post('/create', (req, res) => {
  const pageTitle = req.body.queryResult.outputContexts[0].parameters.title;
  console.log(pageTitle.parameters.title);
});

module.exports = router;
