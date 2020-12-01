const mongoose = require("mongoose");

const URI =
  "mongodb+srv://DBuser:amira123@cluster0.gdban.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
