class Pro {
    static dividirPalabra(str, separator = '') {
        return str.split(separator);
    }

    static extraerCadenaDeTexto(str, start, end) {
        return str.substring(start, end);
    }

    static eliminarEspacios(str) {
        return str.trim();
    }

    static capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static aMinusculas(str) {
        return str.toLowerCase();
    }

    static aMayusculas(str) {
        return str.toUpperCase();
    }

    static contarCaracteres(str) {
        return str.length;
    }
}

export { Pro };