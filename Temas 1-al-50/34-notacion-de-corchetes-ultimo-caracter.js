/* Tema: Notación de corchetes: Último Carácter.
    Descripción: Acceder al último carácter de una cadena.
*/

let miCadena;

/*
El último índice siempre es longitud - 1 porque comenzamos
a contar desde 0.

miCadena.length para "JavaScript" es 10.
El último índice es 9.

Cadena:  J  a  v  a  S  c  r  i  p  t
Índices: 0  1  2  3  4  5  6  7  8  9
*/

miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);  // t.  Entre los corchetes se coloca el índice de la cadena. El ultimo indice es la longitud de la cadena -1. En este caso la longitud de la cadena es 10 y el ultimo indice es 9.
miCadena = "Python";
console.log(miCadena[miCadena.length - 1]); // n
