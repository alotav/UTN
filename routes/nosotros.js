const express = require('express'); //requerimos el modulo express que podemos ver en package.json
const router = express.Router();


//aca decimos que cuando este en localhost:3000/nosotros, se ejecute res.render, que renderizara (mostrara) la vista creada en hbs.
router.get('/', (req,res) => {
    res.render('nosotros');
    res.end;
})

module.exports = router; 