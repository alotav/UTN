const pool = require('.././utils/db');

const getCategoria = async(req,res) => {
    const query = "SELECT * FROM ??";
    const params = ['categoria'];
    return await pool.query(query,params);
}

module.exports = {getCategoria};