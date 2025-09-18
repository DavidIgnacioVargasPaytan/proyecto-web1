/**
 * Este es un ejemplo de código sin ninguna aplicación real.
 * Su único propósito es demostrar la sintaxis de JavaScript.
 */

// Declaración de variables y tipos de datos
let nombre = "Mundo";
const numero = 42;
let esActivo = true;
let listaNumeros = [1, 2, 3, 4, 5];
let objetoPersona = {
  nombre: "Jane",
  edad: 30,
  ciudad: "Gotham"
};

// Función simple que no hace nada útil
function saludar(nombre) {
  // Bucle que itera sobre un array sin un propósito real
  for (let i = 0; i < listaNumeros.length; i++) {
    console.log(`Hola, ${nombre}! El número es ${listaNumeros[i]}`);
  }
}

// Estructura de control: condicional if/else
if (esActivo === true) {
  console.log("El estado es activo.");
} else {
  console.log("El estado es inactivo.");
}

// Otra función que devuelve un valor
function sumar(a, b) {
  return a + b;
}

// Llamadas a las funciones
saludar(nombre);
let resultadoSuma = sumar(10, 20);
console.log(`El resultado de la suma es: ${resultadoSuma}`);

// Uso de un objeto
console.log(`La persona se llama ${objetoPersona.nombre} y vive en ${objetoPersona.ciudad}.`);

// Un comentario de una línea
// Comentario que explica la siguiente línea de código
console.log("Fin del script de ejemplo.");