const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})
.listen('3000', () => console.log('iniciando express js en el perto 3000'));