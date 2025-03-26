const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//CONEXION A LA BASE DE DATOS
require("dotenv").config();
const pool = require("./models/bd");

//Declaracion de Session
const session = require("express-session");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

//Declaracion de variable de contraladores
const nosotrosRouter = require("./routes/nosotrosPage");
const blogRouter = require("./routes/blogPage");
const contactoRouter = require("./routes/contactoPage");
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

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin/login", loginRouter);

//Practica de Controladores de ruta
app.use("/", contactoRouter);
app.use("/", nosotrosRouter);
app.use("/", blogRouter);

//Practicas de sesiones

app.get("/login", function (req, res) {
  const conocido = Boolean(req.session.email);

  res.render("index", {
    title: "Sesiones en Express.js",
    conocido: conocido,
    email: req.session.email,
  });
});

app.post("/login", function (req, res) {
  if (req.body.email) {
    req.session.email = req.body.email;
  }
  res.redirect("/login");
});

app.get("/salir", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

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

//Practica de conexion a Base de Datos
//Select

pool
  .query("SELECT * FROM empleados WHERE trabajo='Full Stack Developer'")
  .then(function (resultados) {
    console.log(resultados);
  });

//Insert

//const obj = {
//  nombre: "Jorge",
// apellido: "Albarinio",
//  trabajo: "Full Stack Developer",
//  edad: 59,
// salario: 90000,
// mail: "exaunicen@gmail.com",
//};

//pool.query("INSERT INTO empleados SET ?", [obj]).then(function (resultados) {
// console.log(resultados);
//});

//Update
//const id = 50;
//const obj2 = {
// salario: 100000,
//};
//pool
// .query("UPDATE empleados SET ? WHERE id_emp = ?", [obj2, id])
// .then(function (resultados) {
//  console.log(resultados);
// });

//Delete
//pool
//.query("DELETE FROM empleados WHERE id_emp BETWEEN 45 AND 50")
//.then(function (resultados) {
// console.log(resultados);
//});

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
