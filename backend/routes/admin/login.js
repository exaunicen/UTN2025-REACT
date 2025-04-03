const express = require("express");
const router = express.Router();
const usuarioModel = require("./../../models/usuariosModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/login", { layout: "admin/layout" });
});

/* GET logout. */
router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/admin/login");
});

/* POST login. */
router.post("/", async (req, res, next) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    const data = await usuarioModel.getUsuario(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.email = data.usuario;

      res.redirect("/blog");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
        message: "Usuario o contraseña incorrecta",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
