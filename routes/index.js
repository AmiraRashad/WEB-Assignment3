var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title : 'Layers'});
});

router.get('/MyCart', function(req, res, next) {
  let MyCart = req.cookies.MyCart;
  if (!MyCart) MyCart=[];
  console.log("fetching");
  res.render('MyCart', {MyCart });
});

module.exports = router;
