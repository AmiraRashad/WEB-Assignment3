var express = require('express');
var router = express.Router();

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title : 'Contact'});
});
module.exports = router;
