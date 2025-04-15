const express = require("express");
const router = express.Router();
const blogModel = require("../../models/blogModel");

/* GET listados de Blog. */
router.get("/", async function (req, res, next) {
  const blogs = await blogModel.getBlog();
  res.render("blog/blogPage", {
    layout: "layout",
    title: "Bienvenido al sistema de gestion del Blog",
    email: req.session.email,
    classBlog: "activo",
    blogs,
  });
});

/* GET Agregar Blog. */
router.get("/agregarBlog", function (req, res, next) {
  res.render("blog/agregarBlog", {
    layout: "layout",
    title: "Agregar Blog",
    email: req.session.email,
    classBlog: "activo",
  });
});

/* POST agrega blog a la base de datos */
router.post("/agregarBlog", async (req, res, next) => {
  try {
    if (
      (req.body.titulo != "") &
      (req.body.subtitulo != "") &
      (req.body.autor != "")
    ) {
      await blogModel.insertBlog(req.body);
      res.redirect("/blog/blogPage");
    } else {
      res.render("blog/agregarBlog", {
        layout: "layout",
        error: true,
        message: "Todos los campos son obligatorios",
        classBlog: "activo",
      });
    }
  } catch (error) {
    res.render("blog/agregarBlog", {
      layout: "layout",
      error: true,
      message: "No se ingreso el Blog",
      classBlog: "activo",
    });
  }
});

/* GET eliminar blog de la base de datos (por id) */
router.get("/eliminarBlog/:id", async (req, res, next) => {
  const id = req.params.id;
  await blogModel.deleteBlog(id);
  res.redirect("/blog/blogPage");
});

/* GET modificar Blog de la base de datos (por id) */
router.get("/modificarBlog/:id", async (req, res, next) => {
  const id = req.params.id;
  const blogs = await blogModel.getBlogById(id);
  res.render("blog/modificarBlog", {
    layout: "layout",
    blogs,
    classBlog: "activo",
  });
});

/* POST Modificando el Blog */
router.post("/modificarBlog", async (req, res, next) => {
  try {
    const obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      imagen: req.body.imagen,
      autor: req.body.autor,
    };
    const id = req.body.id;
    await blogModel.updateBlog(obj, id);
    res.redirect("/blog/blogPage");
  } catch (error) {
    res.render("/blog/modificarBlog", {
      layout: "layout",
      error: true,
      message: "No se modifico el Blog",
      classBlog: "activo",
    });
  }
});

module.exports = router;
