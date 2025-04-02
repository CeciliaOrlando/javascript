/* Tema: Calcular el resto de una división en JavaScript.
 El signo % es el que nos permite obtener el resto de una division. Lo que queda si divido esos dos numeros. me quedo con el numero entero y no el decimal de la division */


let resto = 15 % 5; // 0. Es decir, 15 entre 5 es 3 y no hay resto. La division es exacta.
console.log(resto);

resto = 5 % 1; // 0 . Es decir, 5 entre 1 es 5 y no hay resto. La division es exacta.
console.log(resto);

resto = 5 % 2;  // 1. Es decir, 5 entre 2 es 2 y hay un resto de 1. Por eso el resultado es 1.
console.log(resto);

resto = 5 % 3; // 2 . Es decir, 5 entre 3 es 1 y hay un resto de 2. Por eso el resultado es 2.
console.log(resto);

resto = 5 % 4; // 1. Es decir, 5 entre 4 es 1 y hay un resto de 1. Por eso el resultado es 1.
console.log(resto);

resto = 5 % 5; // 0 . Es decir, 5 entre 5 es 1 y no hay resto. La division es exacta.
console.log(resto);
