const express = require('express');
const router = express.Router();
const propiedadesModel = require('../../models/propiedadesModel');
const vendedoresModel = require('../../models/vendedoresModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET Listados de propiedades. */
router.get('/', async function (req, res, next) {
    const propiedades = await propiedadesModel.getPropiedadesFull();
    console.log(propiedades);

    propiedades.forEach((propiedad) => {
        if (propiedad.imagen) {
            const img = cloudinary.image(propiedad.imagen, {
                width: 100,
                height: 100,
                crop: 'fill',
            });
            propiedad.imagen = img;
        } else {
            propiedad.imagen = 'imagen no disponible';
        }
    });

    res.render('propiedades/propiedadesPage', {
        layout: 'layout',
        title: 'Bienvenido al sistema de gestion de Propiedades',
        email: req.session.email,
        classPropiedades: 'activo',
        propiedades,
    });
});

/* GET Agregar Propiedades. */
router.get('/agregarPropiedades', async function (req, res, next) {
    const vendedores = await vendedoresModel.getVendedores();
    res.render('propiedades/agregarPropiedades', {
        layout: 'layout',
        title: 'Ingresar Propiedades',
        email: req.session.email,
        classPropiedades: 'activo',
        vendedores,
    });
});

/* POST Agregar Propiedades */
router.post('/agregarPropiedades', async (req, res, next) => {
    try {
        let img_id = '';

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (
            (req.body.titulo != '') &
            (req.body.subtitulo != '') &
            (req.body.precio != '') &
            (req.body.descripcion != '') &
            (req.body.value != '')
        ) {
            const obj = {
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                imagen: img_id,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                vendedorId: req.body.value,
            };
            await propiedadesModel.insertPropiedades(obj);
            res.redirect('/propiedades/propiedadesPage');
        } else {
            res.render('propiedades/agregarPropiedades', {
                layout: 'layout',
                error: true,
                message: 'Todos los campos son obligatorios',
                classPropiedades: 'activo',
            });
        }
    } catch (error) {
        res.render('propiedades/agregarPropiedades', {
            layout: 'layout',
            error: true,
            message: 'No se ingreso la Propiedad',
            classPropiedades: 'activo',
        });
    }
});

/* GET eliminar propiedades de la base de datos (por id) */
router.get('/eliminarPropiedades/:id', async (req, res, next) => {
    const id = req.params.id;
    let propiedad = await propiedadesModel.getPropiedadesById(id);
    if (propiedad.imagen) {
        await destroy(propiedad.imagen);
    }
    // Eliminar la propiedad de la base de datos
    await propiedadesModel.deletePropiedades(id);
    res.redirect('/propiedades/propiedadesPage');
});

/* GET modificar Propiedades de la base de datos (por id) */
router.get('/modificarPropiedades/:id', async (req, res, next) => {
    const id = req.params.id;
    const propiedades = await propiedadesModel.getPropiedadesById(id);
    console.log(propiedades.imagen);

    if (propiedades.imagen != null) {
        const img = cloudinary.image(propiedades.imagen, {
            width: 100,
            height: 100,
            crop: 'fill',
        });
        propiedades.imagen = img;
        console.log(propiedades.imagen);
    } else {
        propiedades.imagen = 'imagen no disponible';
    }

    const vendedor = await vendedoresModel.getVendedores();
    res.render('propiedades/modificarPropiedades', {
        layout: 'layout',
        propiedades,
        vendedor,
        classPropiedades: 'activo',
    });
});

/* POST Modificando las Propiedades */
router.post('/modificarPropiedades', async (req, res, next) => {
    try {
        const getPublicId = (imageURL) => {
            const regex = /\/upload\/(?:[^/]+\/)?([^/?]+)(?:\?|$)/;
            const match = imageURL.match(regex);
            return match ? match[1] : null;
        };

        let imageUrl = getPublicId(req.body.img_original);
        console.log(imageUrl);
        let borrar_img_vieja = false;

        if (req.body.img_delete === '1') {
            imageUrl = null;
            borrar_img_vieja = true;
        }

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imageUrl = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }

        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }
        const obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            imagen: imageUrl,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            vendedorId: req.body.value,
        };
        const id = req.body.id;
        console.log(obj);
        await propiedadesModel.updatePropiedades(obj, id);
        res.redirect('/propiedades/propiedadesPage');
    } catch (error) {
        res.render('propiedades/modificarPropiedades', {
            layout: 'layout',
            error: true,
            message: 'No se modifico la Propiedad',
            classPropiedades: 'activo',
        });
    }
});

module.exports = router;
