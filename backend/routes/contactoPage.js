var express = require("express");
var router = express.Router();

/* GET ContactoPage. */
router.get("/contacto", function (req, res, next) {
  res.send("Estamos en la pagina de Contacto");
});

module.exports = router;
