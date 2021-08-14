const express = require('express');
const router = express.Router();
const model = require('./../../models/usuarios'); //requerimos model usuarios

const get = async (req,res) => {
    const usuarios = await model.getAll();
    res.render('adminUsuarios', {usuarios});
}

const showUpdate = async(req,res) => {
    const {id} = req.params; //trae la const id de req params
    const [usuario] = await model.updateuser(id); //pasamos producto con destructuring, traera el objeto completo. Si no pasamos con [] no nos muestra los nombres en el hbs ya que producto seria una constante y no un objeto.
    res.render('updateUsuario', {usuario});

}


router.get('/', get); // cuando estemos en /usuarios llamamos a la funcion get
router.get('/update/:id', showUpdate);
module.exports = router;