/* Tema: Crear un objeto inmutable en JavaScript.
En JavaScript, los objetos son mutables, lo que significa que pueden ser modificados desppués de su creación.
Puedes crear un objeto inmutable utilizando el constructor Object.freeze(). No puedo ni agregar, cambiar ni borar propiedades de un objeto inmutable.
*/

let colores = {
  "verde": "#10e04b",
  "azul": "#1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}

Object.freeze(colores);

colores.amarillo = "#fff200"; // No se puede agregar nuevas propiedades.

colores.verde = "#345sg5";    // No se puede cambiar los valores.

delete colores.verde          // No se puede eliminar propiedades.
