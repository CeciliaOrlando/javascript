/* Tema: Operador rest.
En Javascript se puede usar el operador rest para obtener los argumentos de una función.
El operador rest se representa con el символ "..." y se utiliza para obtener los argumentos de una función.

*/

function miFuncion(...args) {
  console.log(args);  // [1, 2, 3, 4]
}

miFuncion(1);  // [1]
miFuncion(1, 2);  // [1, 2]
miFuncion(1, 2, 3, 4);  // [1, 2, 3, 4]
miFuncion([1, 2, 3], [4, 5, 6]);  //
miFuncion(1, 2, 3, 4, 5, 6);  // [1, 2, 3, 4, 5, 6]

// Ejemplo

const sumar = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0); // 6
};

const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0); // 6
};
