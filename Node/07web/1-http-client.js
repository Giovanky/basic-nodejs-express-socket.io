const http = require('http'),
options = {
    host: 'ed.team',
    port: 80,
    path: '/cursos'
}

http
.get(options, res => console.log(`El sitio ${options.host} ha respondido. Codigo: ${res.statusCode}.Mensaje: ${res.statusMessage}`))
.on('error', err => console.log(`El sitio ${options.host} no respondio. Codigo: ${res.statusCode}.Mensaje: ${res.statusMessage}`))