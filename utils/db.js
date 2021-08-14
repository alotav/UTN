const mysql = require('mysql');
const util = require('util');

let pool = mysql.createPool({           // se usa para conexiones a la bd en sumultaneo
    host: process.env.DB_HOST || 'localhost',  // usar DB HOST "O" LOCALHOST
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'mmecha',
    connectionLimit: 10, // cantidad de consultas en simultaneo
}) 

pool.query = util.promisify(pool.query);  // el "util" convierte en promesa las consultas a la bd 
module.exports = pool;  //exportamos la pool para poder usarlo desde cualquier parte del proyecto
