const { query } = require('.././utils/db');
const pool = require('.././utils/db');

const getAll = async() => {
    try{
    const query = "SELECT username, mail, telefono, admin FROM usuarios"  // llamamos a los datos de usuarios en la bd
    return await pool.query(query);  // indicamos que la const query es una consulta a la base con pool.query
    }
    catch(e){
        console.log(e);
    }
}

const updateuser = async(obj,id) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = ["usuarios", obj, id];
    return await pool.query(query, params);
}

//******************************************************** */
const createUser = async(obj) => { //pasamos el objeto del form de registro hbs
    const query = "INSERT INTO ?? SET ?";
    const params = ['usuarios', obj];
    return await pool.query(query, params);
}

const verify = async (uid) =>{  //seteamos el usuario en habilitado
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?";
    const params = ["usuarios", uid];
    console.log(query,params);
    return await pool.query(query, params);   
}

const auth = async (username,pass) =>{
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
    const params = ["usuarios", username, pass];
    //(console.log(query,params);
    return await pool.query(query,params);
}

const single = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = ["usuarios", id];
    return await pool.query(query, params);
}

const update = async (id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = ["usuarios", obj, id];
    return await pool.query(query, params);
}

module.exports = {createUser, verify, auth, single, update, getAll, updateuser};