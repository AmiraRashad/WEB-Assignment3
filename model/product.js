const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: String,
  price: String,
});

var product = mongoose.model("Product", ProductSchema);
module.exports = product;
