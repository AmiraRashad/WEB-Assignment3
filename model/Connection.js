
const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://DBuser:amira123@cluster0.gdban.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
