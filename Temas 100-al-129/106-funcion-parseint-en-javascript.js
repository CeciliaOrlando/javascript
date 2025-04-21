/*  Tema: Función "parseInt" en JavaScript.
En Javascript se puede convertir un valor de cadena a un número entero con la función parseInt().
Osea que lo pasa de un string a un número entero.
*/

console.log(parseInt("5")); // 5
console.log(parseInt("-47")); // -47
console.log(parseInt("0")); // 0

console.log(parseInt("6.7")); // 6
console.log(parseInt("6.2"));  //

console.log(parseInt(6.7)); // 6

console.log(parseInt("abc")); // NaN porque no es un número

// Ejemplo con variables

let a = "5";
let b = "7";

console.log(a + b); // 57 .Los toma como string y los une juntos

let a = parseInt("5"); // 5
let b = parseInt("7"); // 7

console.log(a + b); // 12. Los toma como números y los suma 
