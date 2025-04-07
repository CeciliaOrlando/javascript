
/* Tema: Escapar comillas en cadenas de caracteres. */

// var miCadena = "Soy una cadena de caracteres "con comillas""; // Error. En este caso, el compilador no sabe si la cadena termina en la primera comilla o en la segunda, por eso da error. Para substituir las comillas dobles por comillas simples, se puede usar la barra invertida (\) para escapar las comillas dobles. De esta manera, el compilador no confundirá las comillas de la cadena con las comillas que delimitan la cadena.

// miCadena = "Soy una cadena de caracteres \"con comillas\""; // Opción previa

let miCadena = "Soy una cadena de caracteres \"con comillas\"";
console.log(miCadena); // "Soy una cadena de caracteres "con comillas""
