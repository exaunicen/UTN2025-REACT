const express = require("express");
const router = express.Router();
const propiedadesModel = require("../../models/propiedadesModel");

/* GET Listados de propiedades. */
router.get("/", async function (req, res, next) {
  const propiedades = await propiedadesModel.getPropiedadesFull();
  res.render("propiedades/propiedadesPage", {
    layout: "layout",
    title: "Bienvenido al sistema de gestion de Propiedades",
    email: req.session.email,
    classPropiedades: "activo",
    propiedades,
  });
});

/* GET Agregar Propiedades. */
router.get("/agregarPropiedades", function (req, res, next) {
  res.render("propiedades/agregarPropiedades", {
    layout: "layout",
    title: "Ingresar Propiedades",
    email: req.session.email,
    classPropiedades: "activo",
  });
});

/* POST Agregar Propiedades */
router.post("/agregarPropiedades", async (req, res, next) => {
  try {
    if (
      (req.body.titulo != "") &
      (req.body.subtitulo != "") &
      (req.body.precio != "") &
      (req.body.descripcion != "")
    ) {
      await propiedadesModel.insertPropiedades(req.body);
      res.redirect("/propiedades/propiedadesPage");
    } else {
      res.render("propiedades/agregarPropiedades", {
        layout: "layout",
        error: true,
        message: "Todos los campos son obligatorios",
        classPropiedades: "activo",
      });
    }
  } catch (error) {
    res.render("propiedades/agregarPropiedades", {
      layout: "layout",
      error: true,
      message: "No se ingreso la Propiedad",
      classPropiedades: "activo",
    });
  }
});

/* GET eliminar propiedades de la base de datos (por id) */
router.get("/eliminarPropiedades/:id", async (req, res, next) => {
  const id = req.params.id;
  await propiedadesModel.deletePropiedades(id);
  res.redirect("/propiedades/propiedadesPage");
});

/* GET modificar Propiedades de la base de datos (por id) */
router.get("/modificarPropiedades/:id", async (req, res, next) => {
  const id = req.params.id;
  const propiedades = await propiedadesModel.getPropiedadesById(id);
  res.render("propiedades/modificarPropiedades", {
    layout: "layout",
    propiedades,
    classPropiedades: "activo",
  });
});

/* POST Modificando las Propiedades */
router.post("/modificarPropiedades", async (req, res, next) => {
  try {
    const obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      imagen: req.body.imagen,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      baja: req.body.baja,
    };
    const id = req.body.id;
    await propiedadesModel.updatePropiedades(obj, id);
    res.redirect("/propiedades/propiedadesPage");
  } catch (error) {
    res.render("/propiedades/modificarPropiedades", {
      layout: "layout",
      error: true,
      message: "No se modifico la Propiedad",
      classPropiedades: "activo",
    });
  }
});

module.exports = router;
