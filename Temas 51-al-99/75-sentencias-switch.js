/* Tema: Sentencias switch.
Las sentencias switch son estructuras de control que permiten ejecutar un bloque de código si una condición es verdadera.
Se usan para evaluar varias condiciones en una sola sentencia. Funcionan como un bloque de sentencias if-else.
El break se utiliza para salir de la sentencia switch.
*/

function clasificarValor(valor) {
  let respuesta;
  switch (valor) {  // El valor a evaluar
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}

clasificarValor(1); // Imprime "alpha"
clasificarValor(2); // Imprime "beta"
clasificarValor(3); // Imprime "gamma"
clasificarValor(4); // Imprime "delta"

// Ejemplo

let producto = "hamburguesa";

switch (producto) {
  case "pizza":
    console.log("La pizza básica cuesta $10.55"); // Imprime "La pizza básica cuesta $10.55"
    break; // sale del switch
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.78");  // Imprime "Las hamburguesas cuestan $6.78"
    break; // sale del switch
  case "helado":
    console.log("El helado cuesta $2.8"); // Imprime "El helado cuesta $2.8"
    break; // sale del switch
}
