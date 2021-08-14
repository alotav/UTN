const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios'); //requerimos el model dnd se encuentra la funcion que comprueba el usuario. (dnd pasamos username y pass)
const sha1 = require('sha1');
//const { render } = require('../app');

const showLogin = (req,res) => res.render('login');

const login = async(req,res) => {
    let {username,pass} = req.body; //pasamos username y pass al model de usuarios para poder compararlo con la bd
    pass = sha1(pass);  // volvemos a encriptar la contraseña para que coincida con la que esta en la bd.
    const logged = await model.auth(username,pass);
    if (logged.length === 0) {
        res.render('login', {message: "Usuario o pass incorrectos"})
    }
    else{
        const [{id, admin}] = logged;
        console.log(id);
        req.session.user = id;
        req.session.admin = admin;
        res.redirect('/admin/usuarios');
    }
    
    

    // Operadores ternarios -- lo siguiente es similar a un if
    // logged.length === 0 // condicion
    // ? res.redirect('/login') // si se cumple la condicion, muestra la view login y da mensaje. En esta linea no va ; al final ya que generalmente se escribe en la misma linea.
    // : null; //else
    // res.redirect('/admin');
}

router.get('/', showLogin);
router.post('/', login);

module.exports = router;