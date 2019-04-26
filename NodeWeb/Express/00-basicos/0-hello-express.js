const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.end('<h1>hola mundo desde express</h1>');
})
.listen('3000', () => console.log('iniciando express js en el perto 3000'));