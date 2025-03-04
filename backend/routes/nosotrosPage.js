var express = require("express");
var router = express.Router();

/* GET NosotrosPage. */
router.get("/nosotros", function (req, res, next) {
  res.send("Estamos en la pagina de Nosotros");
});

module.exports = router;
