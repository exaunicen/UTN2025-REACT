var express = require("express");
var router = express.Router();

/* GET BlogPage. */
router.get("/blog", function (req, res, next) {
  res.send("Estamos en la pagina de blog");
});

module.exports = router;
