/* Tema: Asignar un valor retornado a una variable.
La palabra clave return se utiliza para retornar un valor de una función.
*/

function sumar(a, b) {
  return a + b; // Retornar la suma de a y b
}

// Se asigna el valor retornado a una variable
let resultado = sumar(5, 3);
console.log(resultado); // 8

// Ejemplo

function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion; // Retornar la cadena
}

let miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta); // Mi meta es aprender JavaScript
