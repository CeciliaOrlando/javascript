/* Tema: Sintaxis de desestructuración con el operador rest para reasignar un arreglo.
*/

let  a;
let b;
let arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6];

console.log(a);   // 1
console.log(b);   // 2
console.log(arr); // [3, 4, 5, 6]

// Ejemplo

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
  const [ , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo; // [4, 5, 6, 7, 8]
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal); // [4, 5, 6, 7, 8]
