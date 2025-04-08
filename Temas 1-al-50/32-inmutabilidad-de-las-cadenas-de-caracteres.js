/* Tema: Inmutabilidad de las cadenas de caracteres. Nos e pueden modificar los caracteres individuales de una cadena de texto.
Solo se puede asignar una cadena nueva a la variable, pero no a los caracteres individuales.
*/

let miCadena = "Jola, Mundo";
console.log(miCadena); // Jola, Mundo

miCadena[0] = "H"; // Error porque las cadenas son inmutables. No se pueden modificar los caracteres individuales.

miCadena = "Hola, Mundo"; // Se debe asignar una cadena nueva.
console.log(miCadena); // Hola, Mundo
