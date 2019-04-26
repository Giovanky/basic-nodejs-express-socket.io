const express = require('express');
const app = express();

app
.get('/', (req, res) => {
    res.send(`<h1>Hola mundito</h1>`);
})
.get('/a', (req, res) => {
    res.redirect(301, 'https://ed.team')
})
.get('/json', (req, res) => {
    res.json({
        name: 'giovanny',
        age: 23
    });
})
.get('/render', (req, res) => {
    res.render(`${__dirname}/index.html`);
})
.listen('3000', () => console.log('iniciando express js en el puerto 3000'));