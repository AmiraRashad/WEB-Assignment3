var express = require('express');
var router = express.Router();
var Product = require("../DB/product");
/* GET home page. */
router.get('/', async function(req, res, next) {
    let products = await Product.find();
    console.log(products);
  res.render("products/list", {title: "Products in DB" });
});
module.exports = router;
