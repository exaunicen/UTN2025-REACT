const express = require('express');
const router = express.Router();
const md5 = require('md5');
const usuariosModel = require('../../models/usuariosModel');

/* GET Usuarios. */
router.get('/', async function (req, res, next) {
    const usuarios = await usuariosModel.getUsuarioFull();
    res.render('usuarios/usuariosPage', {
        layout: 'layout',
        title: 'Bienvenido al sistema de gestion de Usuarios',
        email: req.session.email,
        classUsuarios: 'activo',
        usuarios,
    });
});

/* GET Agregar Usuarios. */
router.get('/agregarUsuarios', function (req, res, next) {
    res.render('usuarios/agregarUsuarios', {
        layout: 'layout',
        title: 'Ingresar Usuarios',
        email: req.session.email,
        classUsuarios: 'activo',
    });
});

/* POST Agregar Usuarios */
router.post('/agregarUsuarios', async (req, res, next) => {
    try {
        if ((req.body.usuario != '') & (req.body.password != '')) {
            const pass = md5(req.body.password);
            const obj = {
                usuario: req.body.usuario,
                password: pass,
            };
            await usuariosModel.insertUsuarios(obj);
            res.redirect('/usuarios/usuariosPage');
        } else {
            res.render('usuarios/agregarUsuarios', {
                layout: 'layout',
                error: true,
                message: 'Todos los campos son obligatorios',
                classUsuarios: 'activo',
            });
        }
    } catch (error) {
        res.render('usuarios/agregarUsuarios', {
            layout: 'layout',
            error: true,
            message: 'No se ingreso el Usuario',
            classUsuarios: 'activo',
        });
    }
});

/* GET eliminar usuarios de la base de datos (por id) */
router.get('/eliminarUsuarios/:id', async (req, res, next) => {
    const id = req.params.id;
    await usuariosModel.deleteUsuarios(id);
    res.redirect('/usuarios/usuariosPage');
});

/* GET modificar Usuarios de la base de datos (por id) */
router.get('/modificarUsuarios/:id', async (req, res, next) => {
    const id = req.params.id;
    const usuarios = await usuariosModel.getUsuariosById(id);
    res.render('usuarios/modificarUsuarios', {
        layout: 'layout',
        usuarios,
        classUsuarios: 'activo',
    });
});

/* POST Modificando el Blog */
router.post('/modificarUsuarios', async (req, res, next) => {
    try {
        const pass = md5(req.body.password);
        const obj = {
            password: pass,
        };
        const id = req.body.id;
        await usuariosModel.updateUsuarios(obj, id);
        res.redirect('/usuarios/usuariosPage');
    } catch (error) {
        res.render('usuarios/modificarUsuarios', {
            layout: 'layout',
            error: true,
            message: 'No se modifico el Usuario',
            classUsuarios: 'activo',
        });
    }
});

module.exports = router;
