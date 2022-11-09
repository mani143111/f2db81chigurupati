"use strict";

var express = require('express');

var router = express.Router();
module.exports = router;
router.get('/', function (req, res, next) {
  var query = req.query;
  console.log("rows ".concat(query.rows));
  console.log("cols ".concat(query.cols));
  res.render('gridbuild', {
    title: 'Grid Build',
    query: query
  });
});
//# sourceMappingURL=gridbuild.dev.js.map
