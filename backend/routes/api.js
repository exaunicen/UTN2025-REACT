const express = require('express');
const router = express.Router();
const propiedadesModel = require('../models/propiedadesModel');
const blogModel = require('../models/blogModel');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');

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

router.get('/anuncio/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const propiedades = await propiedadesModel.getPropiedadesById(id);

        if (!propiedades) {
            return res.status(404).json({ message: 'Anuncio no encontrado' });
        }

        if (propiedades.imagen) {
            const img = cloudinary.url(propiedades.imagen, {
                width: 800,
                height: 600,
                crop: 'fill',
            });
            propiedades.imagen = img;
        }

        res.json(propiedades);
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
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

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'exaunicen@gmail.com',
        subject: 'Contacto Web',
        html: `<p>Nombre: ${req.body.nombre}</p>
                <p>Email: ${req.body.email}</p>
               <p>Telefono: ${req.body.telefono}</p>
               <p>Mensaje: ${req.body.mensaje}</p>
               <p>Consulta: ${req.body.opciones}</p>
               <p>Presupuesto: ${req.body.presupuesto}</p>
               <p>Contacto preferente : ${req.body.contacto}</p>`,
    };

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transport.sendMail(mail);
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado correctamente',
    });
});

module.exports = router;
