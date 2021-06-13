const express = require('express');
const routes = express.Router();
const Person = require('./src/model/Profile');

routes.get('/', (req, res) => {
    res.render('index');
})

routes.get('/certificate-Layout', (req, res) => {
    res.render('certificate-Layout');
})

routes.get('/certificate' ,  (req, res) => {

    res.render('certificate' , { Pessoa:Person});
    
})

routes.post('/certificate' ,  (req, res) => {
    
    const fistname = req.body["fistname"];
    
    console.log(fistname);
    res.render('certificate');
   
    
})


module.exports = routes;