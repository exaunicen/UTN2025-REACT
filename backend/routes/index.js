//Ruta del home Page

const express = require("express");
const router = express.Router();
const hbs = require("hbs");

hbs.registerHelper("equals", function (a, b) {
  return a == b;
});

router.get("/", function (req, res, next) {
  res.redirect("admin/login");
});

module.exports = router;
