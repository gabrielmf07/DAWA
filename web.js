var http = require('http'),
fs = require('fs');

var html = fs.readFileSync('./index.html')

http.createServer(function(solicitud,respuesta){
    fs.readFile('./index.html', function(error,html){
        respuesta.write(html)
        respuesta.end();
    })
}).listen(8080);


console.log("Servidor en funcionamiento en http://localhost:8080/");

