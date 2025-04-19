/* Tema: Patrón de retorno anticipado para funciones.
*/

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");  // No se ejecuta
}

console.log(miFuncion()); // Mundo

function calcularRaizCuadrada(num) {
  if (num < 0) {  // Si el argumento es negativo
    return undefined; // Devuelve undefined
  }
  return Math.sqrt(num); // Devuelve la raiz cuadrada
}

console.log(calcularRaizCuadrada(25)); // 5
console.log(calcularRaizCuadrada(-5)); //  undefined
