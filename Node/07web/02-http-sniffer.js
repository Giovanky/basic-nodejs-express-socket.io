const server = require('http'),
client = require('https'),
c = console.log,
hostname = '127.0.0.1',
port = 3000,
options = {
    host: 'ed.team',
    port: 443,
    path: '/cursos'
},
httpClient = res => {
    c(`El sitio ${options.host} ha respondido. Codigo: ${res.statusCode}.Mensaje: ${res.statusMessage}`);
    res.on('data', data => {
        htmlCode += data;
        c(data.toString());
    })
},httpError = err => {
    c(`El sitio ${options.host} ha respondido. Codigo: ${err.code}.Mensaje: ${res.statusMessage}`);
},webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlCode);
}

let htmlCode = ''

//instancia del cliente
client
.get(options, httpClient)
.on('error', httpError);

//levantar server
server
.createServer(webServer)
.listen(port, hostname, () => {
    c(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
