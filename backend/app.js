const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//Conexion a Base de Datos
require('dotenv').config();
const pool = require('./models/bd');

//Declaracion de Session
const session = require('express-session');
const bodyParser = require('body-parser');

//Declaracion de subida de imagenes
const fileUpload = require('express-fileupload');

const app = express();

//Declaracion de variable de contraladores
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usuarios/usuariosPage');
const blogRouter = require('./routes/blog/blogPage');
const loginRouter = require('./routes/admin/login');
const adminRouter = require('./routes/admin/admin');
const propiedadesRouter = require('./routes/propiedades/propiedadesPage');
const vendedoresRouter = require('./routes/vendedores/vendedoresPage');
const { title } = require('process');
const apiRouter = require('./routes/api');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Uso de sessiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'PCA4NS6&sgB7kOpJ',
        resave: false,
        saveUninitialized: true,
    })
);

secured = async (req, res, next) => {
    try {
        if (req.session.id_usuario) {
            next();
        } else {
            res.redirect('/admin/login');
        }
    } catch (error) {
        console.log(error);
    }
};

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);

/* Rutas asignadas a cada controlador */

app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/admin', [secured], adminRouter);
app.use('/blog/blogPage', [secured], blogRouter);
app.use('/propiedades/propiedadesPage', [secured], propiedadesRouter);
app.use('/usuarios/usuariosPage', [secured], usersRouter);
app.use('/vendedores/vendedoresPage', [secured], vendedoresRouter);
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
