// Importar el módulo 'http' de Node.js
var http = require("http");

// Definir una función de manejador que se ejecutará para cada solicitud
var manejador = function (solicitud, respuesta) {
  respuesta.setHeader("Content-Type", "text/plain");
  respuesta.end("Hola, mundo!");
};

// Crear un servidor HTTP y asignarle el manejador
var servidor = http.createServer(manejador);

// Hacer que el servidor escuche en el puerto 8080
servidor.listen(8080);

console.log("Servidor en funcionamiento en http://localhost:8080/");

