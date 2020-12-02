var express = require("express");
var router = express.Router();
var Product = require("../DB/product");
/* GET home page. */
router.get('/', async function(req, res, next) {
    let Products = await Product.find();
    console.log(Products);
  res.render("/products/list", {title: "Products in DB", Products });
});
router.get('/add', async function(req, res, next) {
   
  res.render("/products/add");
});
router.post('/add', async function(req, res, next) {
    let  product= new Product(req.body);
    await product.save();
    res.redirect("/products");
  });

  router.get('/delete/:id', async function(req, res, next) {
    let  product= Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  });
  router.get('/edit/:id', async function(req, res, next) {
    let  product= Product.findByIdAndDelete(req.params.id);
    res.render("/products/edit", {product});
  });
  router.post('/edit/:id', async function(req, res, next) {
   Product.name =req.body.name;
   Product.price=req.body.price;
   await product.save();
    res.render("products");
  });

module.exports = router;
