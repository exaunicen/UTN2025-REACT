const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/admin", {
    layout: "/admin/layout",
    title: "Bienvenido al sistema de gestion de Bienes Raices",
    email: req.session.email,
  });
});

/* GET logout. */
router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/admin/login");
});

module.exports = router;
