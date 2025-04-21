/* Tema: Operador spread.
En Javascript se puede usar el operador spread para expandir los argumentos de una función.
El operador spread se representa con el симвolo "..." y se utiliza para expandir los argumentos de una función.
*/

const numeros = [1, 2, 3];

function sumar(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
  return x + y + z; // 6
}

console.log(sumar(...numeros)); // 
