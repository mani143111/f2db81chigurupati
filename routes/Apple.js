var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Apple', { title: 'search results for apples' });
});

module.exports = router;

