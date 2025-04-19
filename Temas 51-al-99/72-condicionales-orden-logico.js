/* Tema: Condicionales: Orden lógico.
El orden logico es una estructura de control que permite ejecutar un bloque de código si una condición es verdadera.
*/

function clasificarValor(valor) {  // función para clasificar el valor ingresado
  if (valor < 5) {  // si el valor es menor que 5 es verdadera
    console.log("Menor que 5."); // Imprime "Menor que 5."
  } else if (valor < 10) {  // si el valor es menor que 10 es verdadera
    console.log("Menor que 10."); // Imprime "Menor que 10."
  } else {  // si el valor es mayor o igual que 10 es verdadera
    console.log("Mayor o igual que 10."); // Imprime "Mayor o igual que 10."
  }
}

clasificarValor(7); // Imprime "Menor que 5."
clasificarValor(2); // Imprime "Menor que 10."
clasificarValor(15);  // Imprime "Mayor o igual que 10."
