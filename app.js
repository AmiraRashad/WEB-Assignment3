var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var UsersRouter = require("./routes/users");
var session = require("express-session");
var sessionAuth = require("./middleware/sessionAuth");

var app = express();
app.use(session(
  {
  secret:'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{ maxAge: 6000 }
}));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(sessionAuth);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/", UsersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(
    "mongodb://DBuser:amira123@cluster0-shard-00-00.gdban.mongodb.net:27017,cluster0-shard-00-01.gdban.mongodb.net:27017,cluster0-shard-00-02.gdban.mongodb.net:27017/layers?ssl=true&replicaSet=atlas-9konyg-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  

module.exports = app;
