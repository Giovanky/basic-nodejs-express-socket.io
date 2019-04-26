const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.end('<h1>hola mundo desde expresssss</h1>');
})
.get('/users/:id-:name', (req, res) => {
    res.end(`<h1>Hola ${req.params.name}, bienvenido a express</h1>
    <p>id de usuario ${req.params.id}</p>`)
})
.get('/users/', (req, res) => {
    res.set({'Content-type':'text/html; charset=utf-8'});
    res.end(`<h1>Hola es la sección de usuarios</h1>`);
})
.get('/search', (req, res) => {
    res.end(`<h1>Express</h1>
    <p>resultados de busqueda:  ${req.query.s}</p>`);
    
})
.listen('3000', () => console.log('iniciando express js en el puerto 3000'));