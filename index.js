
//Importamos el "paquete" express
const express = require('express');
//Creamos un Objeto de tipo express
const app = express();
//Importar HBS
const hbs = require('hbs');

//Defino el motor"plantilla" con el que trabajare
app.set('view engine', 'hbs');

//Definimos donde estan los parciales
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

//Definimos la ruta.
app.get('/', (req,res)=>{
    res.render('index',{
      autor : 'Nicole Juarez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/monet', (req,res)=>{
    res.render('monet',{
      autor : 'Nicole Juarez',
        year : new Date().getFullYear(),
        title : 'Monet'
    });
});

app.get('/picass', (req,res)=>{
    res.render('picass',{
      autor : 'Nicole Juarez',
        year : new Date().getFullYear(),
        title : 'Picasso'
    });
});
app.get('/velaz', (req,res)=>{
    res.render('velaz',{
      autor : 'Nicole Juarez',
        year : new Date().getFullYear(),
        title : 'Velazquez'
    });
});
app.get('/dali', (req,res)=>{
    res.render('dali',{
      autor : 'Nicole Juarez',
        year : new Date().getFullYear(),
        title : 'Dali'
    });
});

//Arrancamos el servidor web en el puerto 3000
app.listen(8080,()=>{
    //Escribimos en la terminal
    console.log('Escuchando en el puerto 8080');
});
