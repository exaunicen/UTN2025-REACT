const express = require('express');
const router = express.Router();
const blogModel = require('../../models/blogModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET listados de Blog. */
router.get('/', async function (req, res, next) {
    const blogs = await blogModel.getBlog();

    blogs.forEach((blog) => {
        if (blog.imagen) {
            const img = cloudinary.image(blog.imagen, {
                width: 100,
                height: 100,
                crop: 'fill',
            });
            blog.imagen = img;
        } else {
            blog.imagen = 'imagen no disponible';
        }
    });
    res.render('blog/blogPage', {
        layout: 'layout',
        title: 'Bienvenido al sistema de gestion del Blog',
        email: req.session.email,
        classBlog: 'activo',
        blogs,
    });
});

/* GET Agregar Blog. */
router.get('/agregarBlog', function (req, res, next) {
    res.render('blog/agregarBlog', {
        layout: 'layout',
        title: 'Agregar Blog',
        email: req.session.email,
        classBlog: 'activo',
    });
});

/* POST agrega blog a la base de datos */
router.post('/agregarBlog', async (req, res, next) => {
    try {
        let img_id = '';

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (
            (req.body.titulo != '') &
            (req.body.subtitulo != '') &
            (req.body.autor != '')
        ) {
            const obj = {
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                imagen: img_id,
                autor: req.body.autor,
                blog_url: req.body.blog_url,
            };
            await blogModel.insertBlog(obj);
            res.redirect('/blog/blogPage');
        } else {
            res.render('blog/agregarBlog', {
                layout: 'layout',
                error: true,
                message: 'Todos los campos son obligatorios',
                classBlog: 'activo',
            });
        }
    } catch (error) {
        res.render('blog/agregarBlog', {
            layout: 'layout',
            error: true,
            message: 'No se ingreso el Blog',
            classBlog: 'activo',
        });
    }
});

/* GET eliminar blog de la base de datos (por id) */
router.get('/eliminarBlog/:id', async (req, res, next) => {
    const id = req.params.id;
    let blog = await blogModel.getBlogById(id);
    if (blog.imagen) {
        await destroy(blog.imagen);
    }
    await blogModel.deleteBlog(id);
    res.redirect('/blog/blogPage');
});

/* GET modificar Blog de la base de datos (por id) */
router.get('/modificarBlog/:id', async (req, res, next) => {
    const id = req.params.id;
    const blogs = await blogModel.getBlogById(id);
    if (blogs.imagen) {
        const img = cloudinary.image(blogs.imagen, {
            width: 100,
            height: 100,
            crop: 'fill',
        });
        blogs.imagen = img;
    } else {
        blogs.imagen = 'imagen no disponible';
    }
    res.render('blog/modificarBlog', {
        layout: 'layout',
        blogs,
        classBlog: 'activo',
    });
});

/* POST Modificando el Blog */
router.post('/modificarBlog', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === '1') {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }
        const obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            imagen: img_id,
            autor: req.body.autor,
            blog_url: req.body.blog_url,
        };
        const id = req.body.id;
        await blogModel.updateBlog(obj, id);
        res.redirect('/blog/blogPage');
    } catch (error) {
        res.render('/blog/modificarBlog', {
            layout: 'layout',
            error: true,
            message: 'No se modifico el Blog',
            classBlog: 'activo',
        });
    }
});

module.exports = router;
