/* Tema: Ciclo "while" en JavaScript.
El ciclo "while" se utiliza para ejecutar un bloque de instrucciones mientras una condición sea verdadera.

*/

// Ejemplo 1

let i = 0;

while (i <= 3) {  // Mientras i sea menor o igual a 3
  console.log("Hola, Mundo"); // Imprimir "Hola, Mundo" 4 veces
  i++; // Incrementar i
}

// Ejemplo 2

let miArreglo = [];
let i;

console.log(miArreglo); // []

while (i < 10) {  // Mientras i sea menor a 10
  miArreglo.push(i); // Agregar i al arreglo
  i++; // Incrementar i
}

console.log(miArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ejemplo 3

let numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) { //
  numeros.pop(); // Remover el último número.
}

console.log(numeros); // [2, 3, 4, 5]
