function dividirPalabras(texto) {
    return texto.split(' ');
}

function extraerSubcadena(texto, inicio, fin) {
    return texto.substring(inicio, fin);
}

function eliminarEspacios(texto) {
    return texto.replace(/\s+/g, '');
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function minusculas(texto) {
    return texto.toLowerCase();
}

function mayusculas(texto) {
    return texto.toUpperCase();
}

function contarCaracteres(texto) {
    return texto.length;
}

module.exports = {
    dividirPalabras,
    extraerSubcadena,
    eliminarEspacios,
    capitalizar,
    minusculas,
    mayusculas,
    contarCaracteres
};