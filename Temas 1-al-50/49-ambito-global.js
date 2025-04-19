/* Tema: Ámbito global.
Los argumentos de una función son variables globales, lo que significa que pueden ser usadas fuera de la función. Las variables locales se definene en el programa y no en una funcion, por eso son globales y permite su uso por fuera de la misma.
*/

let miVariableGlobal = 5;

console.log(miVariableGlobal); // 5

function miFuncion() {
  console.log(miVariableGlobal); // 5
}

miFuncion(); // 5

console.log(miVariableGlobal); // 5
