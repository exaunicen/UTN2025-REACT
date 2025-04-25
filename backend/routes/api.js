const express = require('express');
const router = express.Router();
const propiedadesModel = require('../models/propiedadesModel');
const blogModel = require('../models/blogModel');
const cloudinary = require('cloudinary').v2;

/* GET Listados de propiedades. */
router.get('/propiedades', async function (req, res, next) {
    const propiedades = await propiedadesModel.getPropiedadesFull();

    propiedades.forEach((propiedad) => {
        if (propiedad.imagen) {
            const img = cloudinary.url(propiedad.imagen, {
                width: 800,
                height: 600,
                crop: 'fill',
            });
            propiedad.imagen = img;
        } else {
            propiedad.imagen = 'imagen no disponible';
        }
    });

    res.json(propiedades);
});

/* GET Listados de propiedades Home. */
router.get('/propTop3', async function (req, res, next) {
    const propiedades = await propiedadesModel.getPropiedadesTop3();

    propiedades.forEach((propiedad) => {
        if (propiedad.imagen) {
            const img = cloudinary.url(propiedad.imagen, {
                width: 800,
                height: 600,
                crop: 'fill',
            });
            propiedad.imagen = img;
        } else {
            propiedad.imagen = 'imagen no disponible';
        }
    });

    res.json(propiedades);
});

/* GET Listar los Blogs disponibles */
router.get('/blog', async function (req, res, next) {
    const blogs = await blogModel.getBlog();

    blogs.forEach((blog) => {
        if (blog.imagen) {
            const img = cloudinary.url(blog.imagen, {
                width: 800,
                height: 600,
                crop: 'fill',
            });
            blog.imagen = img;
        } else {
            blog.imagen = 'imagen no disponible';
        }
    });

    res.json(blogs);
});

/* GET Listar los Blogs Home */
router.get('/blogTop2', async function (req, res, next) {
    const blogs = await blogModel.getBlogTop2();

    blogs.forEach((blog) => {
        if (blog.imagen) {
            const img = cloudinary.url(blog.imagen, {
                width: 800,
                height: 600,
                crop: 'fill',
            });
            blog.imagen = img;
        } else {
            blog.imagen = 'imagen no disponible';
        }
    });

    res.json(blogs);
});

module.exports = router;
