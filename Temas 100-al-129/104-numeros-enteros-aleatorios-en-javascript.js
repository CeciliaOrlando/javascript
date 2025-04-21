/*  Tema: Números enteros aleatorios en JavaScript.
En javascript se pueden generar números enteros aleatorios con la función Math.floor()
*/

let numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

function generarEnteroAleatorio(limiteSuperior) {
  // Generar un número aleatorio entre 0 y el límite
  // superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5)); // 0, 1, 2, 3, 4
console.log(generarEnteroAleatorio(7)); // 0, 1, 2, 3, 4, 5, 6
console.log(generarEnteroAleatorio(10)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(generarEnteroAleatorio(15)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
console.log(generarEnteroAleatorio(20)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19

// Con un ciclo

for (let i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5)); // 0, 1, 2, 3, 4
}
