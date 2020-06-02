const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(_dirname + '/views/partials/');

app.use(express.static(_dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/dali', (req, res)=>{
    res.render('dali');
});
app.get('/picasso', (req, res)=>{
    res.render('picass');
});
app.get('/velazques', (req, res)=>{
    res.render('velaz');
});
app.get('/monet', (req, res)=>{
    res.render('monet');
});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});