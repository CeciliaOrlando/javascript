/* Tema: Operador lógico "not" en JavaScript.
El operador lógico "not" (!) niega la expresión.
*/

/*
   Tabla de verdad del operador NOT
   Para: !X
   |  X  | !X  |
   -----------------------
   |  T  |  F  |
   |  F  |  T  |
*/

// Comprobemos la tabla de verdad
console.log(!true); // false
console.log(!false);   // true

let a = 8;

// !(a > 5) --> !true --> false
console.log(!(a > 5));  // false

// !(a < 5) --> !false --> true
console.log(!(a < 5)); // true
