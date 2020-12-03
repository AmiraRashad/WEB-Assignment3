var express = require('express');
const product = require('../model/product');
var router = express.Router();
var Product = require("../model/product");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  console.log(req.session.user);
  res.render("products/list", { title: "Products in DB", products });
});
router.get("/add", async function (req, res, next) {
  res.render("products/add");
});
// store in db
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});

router.get("/delete/:id", async function (req, res, next) {
 let product = await Product.findByIdAndDelete(req.params.id);
 res.redirect("/products");
});


router.get("/MyCart/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  console.log("Adding to Cart");
  let MyCart =[];
  if(req.cookies.MyCart) MyCart = req.cookies.MyCart;
  MyCart.push(product);
  res.cookie("MyCart", MyCart);
  res.redirect("/products");
 });
 router.get("/MyCart/remove/:id", async function (req, res, next) {
  let MyCart =[];
  if(req.cookies.MyCart) MyCart = req.cookies.MyCart;
  MyCart.splice(
    MyCart.findIndex((c)=>(c._id==req.params.id)),1);
  res.cookie("MyCart", MyCart);
  res.redirect("/MyCart");
 });
router.get("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", {product});
});
router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});

module.exports = router;
