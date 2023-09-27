
const url = require('url');
const querystring = require('querystring');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var http = require("http"),
    fs = require("fs")


const Operacion = require("./clase.js");


http.createServer(function (req, res) {
    const urlActual = 'http://' + req.headers.host + req.url;

    fs.readFile('./form.html', function (err, html) {
        var html_string = html.toString();

        const urlCompleta = urlActual;

        // Obtener los parámetros de la URL
        const urlParseada = url.parse(urlCompleta);
        const parametros1 = querystring.parse(urlParseada.query);

        // Obtener el valor del parámetro 'parametros'
        const num1 = parametros1.n1;
        const num2 = parametros1.n2
        const opcion = parametros1.opcion

        // Imprimir el valor del parámetro

        var resSuma = 0
        var tipodeoperacion = ""

        const calc = new Operacion();
        console.log(calc.sumar(1, 2));


        if (typeof num1 === 'undefined') {
            console.log("");
        } else {

            switch (opcion) {
                case "sumar":
                    console.log("Esta sumando");
                    var a = parseInt(num1);
                    var b = parseInt(num2);
                    console.log(a + b);
                    resSuma = calc.sumar(a, b);
                    break;
                case "multiplicar":
                    console.log("Esta Restando");
                    var a = parseInt(num1);
                    var b = parseInt(num2);
                    console.log(a + b);
                    resSuma = calc.multiplicar(a, b);
                    break;
                case "dividir":
                    console.log("Esta Restando");
                    var a = parseInt(num1);
                    var b = parseInt(num2);
                    console.log(a + b);
                    resSuma = calc.dividir(a, b);
                    break;

                case "restar":
                    console.log("Esta Restando");
                    var a = parseInt(num1);
                    var b = parseInt(num2);
                    console.log(a + b);
                    resSuma = calc.restar(a, b);
                    break;
                default:
                    console.log("Opción no válida");
                    break;
            }

        }

        const dom = new JSDOM(html);

        // Obtener el elemento con id "suma" del objeto DOM
        var sumaElement = dom.window.document.getElementById("suma");
        var tipoElement = dom.window.document.getElementById("tipo");

        sumaElement.textContent = resSuma
        tipoElement.textContent = tipodeoperacion

        const resultadoValue = sumaElement.textContent;
        const resultadoValue2 = tipoElement.textContent;
        console.log(sumaElement.textContent);

        res.writeHead(200, {
            'Content-Type': 'text'
        });
        res.write(html_string)
        res.end(resultadoValue ,resultadoValue2);
    })
}).listen(8000)