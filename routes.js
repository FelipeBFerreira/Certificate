const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    res.send("Essa e a Primeira Rota Creada com Express");
})

routes.get('/certificate' ,  (req, res) => {
    res.render('certificate' , {layout: false});
})


module.exports = routes;