const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Name: {
    type: String
  },
 Price: {
    type: String
  }
});

module.exports = Product = mongoose.model("Product", ProductSchema);
module.exports = Product;