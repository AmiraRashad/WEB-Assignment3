
const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://DBuser:amira123@cluster0.gdban.mongodb.net/Layers.product?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
