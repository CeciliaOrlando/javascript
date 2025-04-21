/* Tema: Funciones flecha.
En Javascript, las funciones flecha son una forma de crear funciones anonimas.
Las funciones flecha tienen un alcance local y pueden ser accedidas solo dentro del bloque donde se declararon.
Las funciones anonimas son funciones que no tienen nombre y se crean utilizando la palabra clave function.

*/

// Función Anónima

const fecha = function() {
  return new Date();
};

// Función flecha

const fecha = () => new Date();
