/* Tema: Números aleatorios en JavaScript.
En javascript se pueden generar números aleatorios con la función Math.random()
*/

function generarFraccionAleatoria() {
  // Generar y retornar número entre 0 y 1
  // 0 inclusive. 1 no está incluido en los posibles resultados.
  return Math.random();  // Math.random() es un metodo que genera un número aleatorio entre 0 y 1
}

console.log(generarFraccionAleatoria()); // 0.123456789
console.log(generarFraccionAleatoria()); // 0.123456789
console.log(generarFraccionAleatoria()); // 0.123456789
console.log(generarFraccionAleatoria()); // 0.123456789

let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // 0.123456789
