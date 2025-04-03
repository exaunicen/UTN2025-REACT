const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//Conexion a Base de Datos
require("dotenv").config();
const pool = require("./models/bd");

//Declaracion de Session
const session = require("express-session");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

//Declaracion de variable de contraladores
const blogRouter = require("./routes/blogPage");
const loginRouter = require("./routes/admin/login");
const { title } = require("process");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Uso de sessiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "PCA4NS6&sgB7kOpJ",
    resave: false,
    saveUninitialized: true,
  })
);

secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin/login", loginRouter);
app.use("/", [secured], blogRouter);

//Rutas para el CRUD de Blog
app.get("/salir", function (req, res) {
  req.session.destroy();
  res.redirect("/");
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
