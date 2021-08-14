const express = require('express');
const router = express.Router();
const multer = require('multer'); // requiero el modulo de multer para poder subir el archivo***
const config = {dest: './public/tmp'}; //carpeta tmp para guardar los archivos que sube el usuario.
const upload = multer(config); //aca configuramos multer le decimos a multer dnd guardar los archivos temporales
const service = require('./../../services/productos');
const model = require('./../../models/productos'); //requerimos el model de productos
const modelCategoria = require('./../../models/categorias');
const { imgFile } = require('../../utils/fileHandler');



const get = async (req,res) => {
    const productos = await model.getAll();
    res.render('adminProductos', {productos});
}

const showCreate = async(req,res) => {
    const categoria = await modelCategoria.getCategoria();
    console.log(categoria);
    res.render('createProducto', {categoria}); //pasamos la categoria

}
const create = async(req,res) => {
    const {body: producto} = req;
    const {insertId} = await model.crearProducto(producto);
    const idImg = await service.createProduct(req.body, req.file);
    console.log(insertId, req.file);
    res.redirect('/admin/productos');
}

const showUpdate = async(req,res) => {
    const {id} = req.params; //trae la const id de req params
    const [producto] = await model.getSingle(id); //pasamos producto con destructuring, traera el objeto completo. Si no pasamos con [] no nos muestra los nombres en el hbs ya que producto seria una constante y no un objeto.
    const categoria = await modelCategoria.getCategoria();
    //console.log(producto);
    res.render('updateProducto', {producto, categoria});

}

const update = async(req,res) => {
    const {id} = req.params;
    const producto = req.body;
    
    console.log(producto);
    const {insertId} = await model.update(producto,id);
    console.log(insertId);
    res.redirect('/admin/productos');
}

const del = async(req,res) => {
    const {id} = req.params;
    const {insertId} = await model.del(id);
    console.log(insertId);
    res.redirect('/admin/productos');
}

router.get('/',get); //llamamos a una funcion get cuando estemos en /
router.get('/create', showCreate); //cuando estemos en admin/create (generada en el hbs), ejecutar funcion showCreate
router.post('/create/', upload.single("imagen"), create);
//router.post('/create', create); //
router.get('/update/:id', showUpdate); // para el update se necesita el id del producto a modificar, lo llamamos con :id
router.post('/update/:id', update);
router.get('/delete/:id', del);


module.exports = router;