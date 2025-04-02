//Tema: Asignar el valor de una variable a otra variable.

/* El valor de una variable se puede asignar a otra variable.
Esto significa que el valor de la primera variable se copia en la segunda variable.
Si la primera variable cambia, la segunda variable no cambia.
Esto se debe a que las variables son contenedores que almacenan datos.*/


// Opción 1

let a = 5;
let b = a;

console.log(a); // 5
console.log(b); // 5
// En este caso, tanto a como b tienen el valor 5.


// Opción 2

let a = 5;
let b;

b = a; 

console.log(a); //5
console.log(b);// 5
// En este caso, tanto a como b tienen el valor 5.
