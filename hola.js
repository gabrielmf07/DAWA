// Importar el módulo 'http' de Node.js
var http = require('http');

// Definir una función de manejador que se ejecutará para cada solicitud
var manejador = function(solicitud, respuesta){
    // Imprimir un mensaje en la consola para indicar una conexión entrante
    console.log('Conexión entrante');

    // Enviar la respuesta al cliente con "Hola mundo!" como contenido
    respuesta.end('Hola mundo!');
};

// Crear un servidor HTTP y asignarle el manejador
var servidor = http.createServer(manejador);

// Hacer que el servidor escuche en el puerto 8080
servidor.listen(8080);
