//insertamos empleado con un INSERT
//subimos img con imgFile
//insertamos empleadoImg con INSERT

const {crearProducto, crearProdImg} = require('../models/productos');
const {imgFile} = require('../utils/fileHandler');

const createProduct = async(body,file) => {  //le pasamos el req.body y req.file para poder manejar el archivo y el cuerpo del form
    try {
        const {insertId: id_producto} = await crearProducto(body); // el create devuelve un insert, con insertId tomamos el valor insertado en id_empleado de la base.
        const uid = imgFile(file); // la const uid debe llamarse igual que en la bd
        const obj = {id_producto, uid};
        const {insertId: idImg} = await crearProdImg(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createProduct}; 