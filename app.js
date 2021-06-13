const express = require('express');
const app =  express();
const routes = require('./routes');
const handlebars = require('express-handlebars');

app.set('views', __dirname + '/views'); 
app.engine('handlebars' , handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(routes)

app.listen(3000, () => {
    console.log("Servidor Rodando");
})

