// currencyConverter.js

// Mensaje de bienvenida y explicación
console.log("Bienvenido al Convertidor de Moneda");
console.log("Este programa convierte una cantidad de dólares a euros.");
console.log("La tasa de cambio utilizada es 1 dólar = 0.85 euros.");

// Función para convertir dólares a euros
function dolaresAEuros(dolares) {
    const tasaCambio = 0.85;
    const euros = dolares * tasaCambio;
    return euros;
}

// Obtener la cantidad de dólares del usuario
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Por favor, ingrese la cantidad en dólares: ", (dolares) => {
    const cantidadEuros = dolaresAEuros(parseFloat(dolares));
    console.log(`${dolares} dólares son equivalentes a ${cantidadEuros} euros.`);
    readline.close();
});
