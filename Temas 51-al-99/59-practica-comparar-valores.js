/* Tema: Practica cómo comparar valores.
*/

let a;
let b;

a = 5;
b = 5;

console.log(a == b);  // true  5 == 5
console.log(a === b); // true  5 === 5

b = 8;

console.log(a == b);  // false   5 == 8
console.log(a === b); // false  5 === 8

b = "5";

console.log(a == b);  // true  5 == "5"
console.log(a === b); // false 5 === "5"

a = "JavaScript";
b = "Javascript";

console.log(a == b);  // true  JavaScript == Javascript
console.log(a === b); // true JavaScript === Javascript
