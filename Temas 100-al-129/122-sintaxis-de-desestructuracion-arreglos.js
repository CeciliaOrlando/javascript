/* Tema: Sintaxis de desestructuración (Arreglos).
*/

let a;
let b;
let c;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

[a, b] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2

[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// Intercambiar valores de variables

let a = 8;
let b = 6;

[b, a] = [b, a];

console.log("a: ", a); // 6
console.log("b: ", b); // 8
