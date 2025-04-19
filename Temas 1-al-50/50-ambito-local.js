/* Tema: Ámbito local.
Los argumentos de una función son variables locales, lo que significa que solo pueden ser usadas dentro de la función.
Las variables locales se definen en la función y no en el programa, por eso son locales y no permiten su uso por fuera de la misma.
*/

function miFuncion() {
  let miVariableLocal = 4;
  console.log(miVariableLocal); // 4
}

miFuncion(); // La variable está definida dentro de la función.
// ¡Error!
// Al ser una variable local, no se puede usar fuera de la función.
console.log(miVariableLocal); // Error
