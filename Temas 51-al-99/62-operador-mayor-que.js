/* Tema: Operador "mayor que" en JavaScript.
> mayor que
>= mayor o igual que
< menor que
<= menor o igual que

Javascript utiliza el orden alfabetico en las cadenas de texto para comparar*/

// Mayor que: >

console.log(6 > 5);  // true  6 es mayor que 5
console.log(3 > 10); // false  3 es menor que 10

console.log("B" > "A");     // true  B es mayor que A
console.log("ACB" > "ABC"); // true  ACB es mayor que ABC

console.log("AB" > "A");    // true  AB es mayor que A

console.log("Mundo" > "Hola");         // true  Mundo es mayor que Hola
console.log("M" > "A");                // true  M es mayor que A

console.log("JavaScript" > "Python");  // false  JavaScript es menor que Python
console.log("J" > "P");                // false  J es menor que P

var a = 15;
var b = 7;

console.log(a > b);  // true  15 es mayor que 7
console.log(b > a);  // false     7 es menor que 15
