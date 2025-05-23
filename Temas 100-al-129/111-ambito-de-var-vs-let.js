/* Tema: Ámbito de var vs. let.
En JavaScript, las variables declaradas con la palabra clave var tienen un alcance global y pueden ser accedidas desde cualquier parte del código.
En cambio, las variables declaradas con la palabra clave let tienen un alcance local y pueden ser accedidas solo dentro del bloque donde se declararon.
*/

var miVariableGlobal = 4;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);

  var miVariableLocal = 8;
  console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);
console.log(miVariableLocal); // Error

/* Cuanto declaras una variable con la palabra let dentro de un bloque,
una declaración o expresión, su alcance está limitado a ese bloque,
declaración o expresión. */

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // No hay error si se usa var

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Error si se usa let

// Ejemplo con let

var mostrarColor = true;

if (mostrarColor) {
  let color = "verde";
  console.log("Mi color favorito es: " + color);
}

console.log(color); // Error

// Ejemplo con var

if (mostrarColor) {
  var color = "verde";
  console.log("Mi color favorito es " + color);
}

console.log(color); // No hay error
