/* Tema: Notación de Corchetes: de derecha a izquierda.
Nos permite acceder a los datos de una cadena de texto.
*/

let miCadena;
let n;

/*
El penúltimo índice es longitud - 2 porque comenzamos
a contar desde 0.

miCadena.length es 10 para esta cadena de caracteres.
El penúltimo índice es 8.

Cadena:  J  a  v  a  S  c  r  i  p  t
Índices: 0  1  2  3  4  5  6  7  8  9
*/

miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 2]); // p
// En este caso, la longitud de la cadena es 10 y el índice es 8.
// El penúltimo índice es longitud - 2 porque comenzamos


// Alternativa

miCadena = "JavaScript";
n = 4;

console.log(miCadena[miCadena.length - n]); // S
// En este caso, la longitud de la cadena es 10 y el índice es 6.
// El penúltimo índice es longitud - 2 porque comenzamos
// a contar desde 0.
