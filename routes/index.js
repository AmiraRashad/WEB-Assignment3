var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title : 'Layers'});
});
router.get('/MyCart', function(req, res, next) {
  res.render('MyCart', { title : 'Your Items'});
});
module.exports = router;
