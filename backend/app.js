var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

//Declaracion de variable de contraladores
const nosotrosRouter = require("./routes/nosotrosPage");
const blogRouter = require("./routes/blogPage");
const contactoRouter = require("./routes/contactoPage");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//Practica de Controladores de ruta
app.use("/", contactoRouter);
app.use("/", nosotrosRouter);
app.use("/", blogRouter);

// Practica de rutas
app.get("/contacto", function (req, res) {
  res.send("Pagina de Contacto BIENES RAICES");
});

app.get("/nosotros", function (req, res) {
  res.send("Pagina de Nosotros BIENES RAICES");
});

app.get("/blog", function (req, res) {
  res.send("Pagina de Blog BIENES RAICES");
});

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

module.exports = app;
