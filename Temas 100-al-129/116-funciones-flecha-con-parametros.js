/* Tema: Funciones flecha con parámetros.
En javascript, las funciones flecha son una forma de crear funciones anonimas.
Las funciones flecha tienen un alcance local y pueden ser accedidas solo dentro del bloque donde se declararon.
*/

const sumarTres = function(x) {
  return x + 3;
};
console.log(sumarTres(4)); // 7

// Función Flecha
const sumarTres = (x) => x + 3;
console.log(sumarTres(4)); // 7

// Ejemplo

// Función Tradicional
const concatenar = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenar([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

// Función Flecha
const concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

// Ejemplo 3: Varias líneas. Debes incluir llaves y return.

const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};

console.log(sumar(1, 1)); // 9
