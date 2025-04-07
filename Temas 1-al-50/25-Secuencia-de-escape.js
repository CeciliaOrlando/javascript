/* Tema: Secuencias de escape en JavaScript.
Formas de representar caracteres especiales dentro de cadenas de texto.
*/

/*
Código | Resultado
------------------
\'      Comilla Simple  // se usa para incluir comillas simples dentro de una cadena delimitada por comillas simples.
\"      Comilla Doble  // se usa para incluir comillas dobles dentro de una cadena delimitada por comillas dobles.
\\      Barra invertida  // se usa para incluir una barra invertida dentro de una cadena.
\n      Línea Nueva  // se usa para incluir un salto de línea dentro de una cadena.
\r      Retorno de Carro  // se usa para mover el cursor al inicio de la línea.
\t      Tabulación // se usa para incluir un tabulador dentro de una cadena.
\b      Retroceso  // se usa para eliminar el carácter anterior.
\f      Salto de Página  // se usa para incluir un salto de página dentro de una cadena.
...
 */

var miMeta;

miMeta = "Aprender \'JavaScript\'";
console.log(miMeta);

miMeta = "Aprender \"JavaScript\"";
console.log(miMeta);

miMeta = "Aprender \\ JavaScript";
console.log(miMeta);

miMeta = "Aprender \n JavaScript";
console.log(miMeta);
