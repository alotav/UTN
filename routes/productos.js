const express = require('express'); //requerimos el modulo express que podemos ver en package.json
const router = express.Router();
//const model = require('./../models/productos');
const {getAll, getSingle} = require('../models/productos'); //LO MISMO QUE LA LINEA DE ARRIBA PERO CON DESTRUCTURING.
// llamamos tambien a getSingle creado abajo y la creamos en models

const all = async(req, res) => {    //COMO LLAMAMOS A LA BD, USAMOS ASYNC AWAIT
    //const productos = await model.getAll();  //USAMOS LA FUNCION EXPORTADA EN MODELS
    const productos = await getAll(); //LO MISMO QUE LA LINEA DE ARRIBA PERO CON DESTRUCTURING
    console.log(productos);
    res.render('productos', {productos});  //decimos que renderice la vista productos.hbs y le pasamos los datos de la consulta que se hizo a la base de datos con getAll
}

const single = async(req,res) => {
    const {id} = req.params; //destructuring para el id, es igual a decir  const id=req.paramd.id
    const producto = await getSingle(id); //llamamos a la funcion getSingle (debemos crearla en models)
    console.log(producto);
    res.end();
}

// const create = async(req,res) => {
//     const {body: producto} = req;
//     const messageId = await crearProducto(producto);
//     console.log(messageId);
//     res.redirect('/');
// }

// const getCreate = async(req,res) => {
//     res.render('createProducto');
// }

router.get('/',all);
router.get('/single/:id', single)  //creamos la ruta dinamica para que cargue el /id dependiendo el producto. Tambien creamos la funcion single.
//router.get('/create', getCreate); //necesitamos un form para pasar datos, generamos la subruta "create" y la funcion getCreate
//router.post('/create', create); //aca vamos a tener la info que mandamos en el form hbs
module.exports = router;