const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv'); // requiero a los modulos instalados, en este caso dotenv
const session = require('express-session');
const {verifyUser, verifyAdmin} = require('./middlewares/auth');

dotenv.config();
const indexRouter = require('./routes/index'); // 1 - llama a al alchivo index dentro de routes. Este es el controlador
const usersRouter = require('./routes/users');
const veranito = require('./routes/veranito'); //creo productos.js dentro de routes y lo requiero.
const nosotros = require('./routes/nosotros'); //lo mismo, creamos nosotros.js en las rutas y le requerimos
const registro = require('./routes/registro');
const productos = require('./routes/productos');
const login = require('./routes/login');

const usuarios = require('./routes/usuarios');

const adminIndex = require('./routes/admin/index');
const adminProductos = require('./routes/admin/productos');
const adminUsuarios = require('./routes/admin/usuarios');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ //ver documentacion de session
   secret: 'contraEncript',
   cookie: {maxAge: null}, //tiempo de vencimiento de la cookie, ej 10 eq a 10 seg. 10*60 = a 10 min.
   resave: true, // vuelve a guardar, estas son todas variables que solicita session, ver doc.
   saveUninitialized: false, //esta nos mantiene la sesion iniciada o no en caso que se reinicie el server, dependiendo el valor true or false.
 }));


 //rutas publicas
app.use('/', indexRouter); // 2 - aca indico que cuando ingrese a esta ruta, cargue el controlador indexRouter.
app.use('/users', usersRouter);
app.use('/veranito', veranito); //indico que cuando este en localhost:3000/categoria llame a la const categoria declarada arriba como controlador.
app.use('/nosotros', nosotros); //cuando ingresemos a /nosotros llamara a la const declarada arriba const nosotros = require('./routes/nosotros');
app.use('/registro', registro);
app.use('/productos', productos);
app.use('/login',login);

//rutas users
app.use('/usuarios', verifyUser, usuarios);

//rutas admin
app.use('/admin', verifyAdmin , adminIndex);
app.use('/admin/productos', verifyUser, adminProductos);
app.use('/admin/usuarios', verifyUser,adminUsuarios);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
