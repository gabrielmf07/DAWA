const http = require('http');
const url = require('url');
const procesadorTexto = require('./p.js');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/dividir-palabras') {
    const palabras = procesadorTexto.dividirPalabras(reqUrl.query.texto);
    res.end(palabras.join(', '));
  } else if (reqUrl.pathname === '/extraer-subcadena') {
    const subcadena = procesadorTexto.extraerSubcadena(
      reqUrl.query.texto,
      parseInt(reqUrl.query.inicio),
      parseInt(reqUrl.query.fin)
    );
    res.end(subcadena);
  } else if (reqUrl.pathname === '/eliminar-espacios') {
    const textoSinEspacios = procesadorTexto.eliminarEspacios(reqUrl.query.texto);
    res.end(textoSinEspacios);
  } else if (reqUrl.pathname === '/capitalizar') {
    const textoCapitalizado = procesadorTexto.capitalizar(reqUrl.query.texto);
    res.end(textoCapitalizado);
  } else if (reqUrl.pathname === '/minusculas') {
    const textoEnMinusculas = procesadorTexto.minusculas(reqUrl.query.texto);
    res.end(textoEnMinusculas);
  } else if (reqUrl.pathname === '/mayusculas') {
    const textoEnMayusculas = procesadorTexto.mayusculas(reqUrl.query.texto);
    res.end(textoEnMayusculas);
  } else if (reqUrl.pathname === '/contar-caracteres') {
    const numCaracteres = procesadorTexto.contarCaracteres(reqUrl.query.texto);
    res.end(numCaracteres.toString());
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});