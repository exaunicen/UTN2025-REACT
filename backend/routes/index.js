//Ruta del home Page

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.redirect("admin/login");
});

module.exports = router;
