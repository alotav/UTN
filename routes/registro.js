const express = require('express'); //requerimos el modulo express que podemos ver en package.json
const router = express.Router();
const model = require('./../models/usuarios'); //indicamos conexion a bd tabla usuarios
const sha1 = require('sha1'); //requerimos el modulo de encriptacion
const {v4: uuid} = require('uuid'); //requerimos modulo para id unico que se usara para confirmacion correo.
const {send} = require('./../services/mail'); //requerimos modulo de mail

const showRegistro = (req,res) => {
    res.render('registro');
}

const createUser = async(req,res) => {
    const usuario = req.body;  //este es el usuario que devuelve el form. Hay que modificarlo para enviarlo a la bd ya que queremos la pass encriptada y agregarle la clave unica
    console.log(usuario); 
    //res.end();
    const uid = uuid();
    console.log(uid);
    const usuarioFinal = {  //este es el usuario que se va a pasar a la bd
        username: usuario.username,
        pass: sha1(usuario.pass),
        mail: usuario.mail,
        confirmacionCorreo: uid,
        telefono: usuario.telefono,
    }
    console.log(usuarioFinal);
    const agregado = await model.createUser(usuarioFinal);
    console.log(agregado);
    send({mail: usuarioFinal.mail, 
        asunto: 'Gracias por registrarte',
        cuerpo: `<h1>Bienvenido ${usuarioFinal.username}</h1>
                <br></br>
                <a href="http://127.0.0.1:3000/registro/verify/${uid}">Link Magico</a>`}); //DESTRUCTURING
    res.redirect('/');
}

    const verify = async (req,res) => {
        const {uid} = req.params;
        console.log(uid);
        const messageId = await model.verify(uid);
        res.redirect('/');
    }
router.get('/', showRegistro);
router.post('/create',createUser); //aca recibimos la informacion enviada desde el form con POST, y con el segundo create llamamos a la funcion de arriba (const create)
router.get('/verify/:uid', verify); //accedemos al link a traves del params (uid)

module.exports = router; 