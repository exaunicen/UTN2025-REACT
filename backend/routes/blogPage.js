var express = require("express");
var router = express.Router();

/* GET BlogPage. */
router.get("/blog", function (req, res, next) {
  res.render("blogPage", {
    layout: "layout",
    title: "Bienvenido al sistema de gestion del Blog",
    conocido: Boolean(req.session.id_usuario),
    email: req.session.email,
  });
});

module.exports = router;
