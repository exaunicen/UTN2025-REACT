const express = require("express");
const router = express.Router();
const vendedoresModel = require("../../models/vendedoresModel");

/* GET Vendedores. */
router.get("/", async function (req, res, next) {
  const vendedores = await vendedoresModel.getVendedores();
  res.render("vendedores/vendedoresPage", {
    layout: "layout",
    title: "Bienvenido al sistema de gestion de Usuarios",
    email: req.session.email,
    classVendedores: "activo",
    vendedores,
  });
});
/* GET Agregar Vendedores. */
router.get("/agregarVendedores", function (req, res, next) {
  res.render("vendedores/agregarVendedores", {
    layout: "layout",
    title: "Ingresar Vendedores",
    email: req.session.email,
    classVendedores: "activo",
  });
});

/* POST agrega blog a la base de datos */
router.post("/agregarVendedores", async (req, res, next) => {
  try {
    if (
      (req.body.nombre != "") &
      (req.body.apellido != "") &
      (req.body.cell != "") &
      (req.body.email != "")
    ) {
      await vendedoresModel.insertVendedores(req.body);
      res.redirect("/vendedores/vendedoresPage");
    } else {
      res.render("vendedores/agregarVendedores", {
        layout: "layout",
        error: true,
        message: "Todos los campos son obligatorios",
        classBlog: "activo",
      });
    }
  } catch (error) {
    res.render("vendedores/agregarVendedores", {
      layout: "layout",
      error: true,
      message: "No se ingreso el Vendedor",
      classBlog: "activo",
    });
  }
});

/* GET eliminar Vendedor de la base de datos (por id) */
router.get("/eliminarVendedores/:id", async (req, res, next) => {
  const id = req.params.id;
  await vendedoresModel.deleteVendedores(id);
  res.redirect("/vendedores/vendedoresPage");
});

/* GET modificar Vendedores de la base de datos (por id) */
router.get("/modificarVendedores/:id", async (req, res, next) => {
  const id = req.params.id;
  const vendedores = await vendedoresModel.getVendedoresById(id);
  res.render("vendedores/modificarVendedores", {
    layout: "layout",
    vendedores,
    classVendedores: "activo",
  });
});

/* POST Modificando Vendedores */
router.post("/modificarVendedores", async (req, res, next) => {
  try {
    const obj = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cell: req.body.cell,
      email: req.body.email,
    };
    const id = req.body.id;
    await vendedoresModel.updateVendedores(obj, id);
    res.redirect("/vendedores/VendedoresPage");
  } catch (error) {
    res.render("vendedores/modificarVendedores", {
      layout: "layout",
      error: true,
      message: "No se modifico el Vendedor",
      classVendedores: "activo",
    });
  }
});

module.exports = router;
