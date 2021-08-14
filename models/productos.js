const pool = require('.././utils/db');  //requerimos la pool creada en utils db

const getAll = async() => {
    try{
    const query = "SELECT nombre, id_categoria, precio, id FROM productos WHERE eliminado = 0"  //creamos una constante llamada query, y hacemos una consulta que pasamos como string.
    return await pool.query(query);  // indicamos que la const query es una consulta a la base con pool.query
    }
    catch(e){
        console.log(e);
    }
}

const getSingle = async (id)  =>{
    //const query = `SELECT nombre, id_categoria, id FROM productos WHERE id = ${id}` //uso template strong xq no funciona params
    const query = "SELECT nombre, id_categoria, precio, id FROM productos WHERE id = ?"
    const params = [id]; // los params reemplazan al ? en la query de arriba y lo hacen en el mismo orden en el que estan escritos.
    return await pool.query(query, params); // OJO -- daba error de promesa xq no habia puesto params en pool.query
}

const crearProducto = async(obj) => {  //el OBJ que pasamos aca es el req.body
    const query = "INSERT INTO ?? SET ?";
    const params = ["productos", obj];
    console.log(query,params);
    return await pool.query(query, params);
}

const crearProdImg = async(obj) => {  //el OBJ que pasamos aca es el req.body
    const query = "INSERT INTO ?? SET ?";
    const params = ["productosimg", obj];
    console.log(query,params);
    return await pool.query(query, params);
}

const update = async(obj,id) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = ["productos", obj, id];
    return await pool.query(query, params);
}

const del = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = ["productos", id];
    return await pool.query(query, params);
}

module.exports = {getAll, getSingle, crearProducto, update, del, crearProdImg} //siempre exporto la funcion ENTRE LLAVES para poder usarla desde otra parte del proyecto
