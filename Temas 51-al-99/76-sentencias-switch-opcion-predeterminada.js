/* Tema: Sentencias switch: opción predeterminada.
La opcion predeterminada se utiliza para ejecutar un bloque de codigo si ninguna de las opciones anteriores es verdadera. Se usa por default. 
*/

function seleccionarIdioma(valor) {
  let idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Francés";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default: // Opcion predeterminada
      idioma = "Inglés";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(1));  // Español
console.log(seleccionarIdioma(2));  // Francés
console.log(seleccionarIdioma(3));  // Italiano
console.log(seleccionarIdioma(4));  // Inglés
