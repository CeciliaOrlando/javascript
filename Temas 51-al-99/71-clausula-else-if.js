/* Tema: Cláusula "else if" en sentencias condicionales.
La cláusula "else if" es una cláusula de control que permite ejecutar un bloque de código si una condición es falsa y otra condición es verdadera.
*/

function clasificarValor(valor) {  // función para clasificar el valor ingresado
  if (valor % 2 == 0) {  // si el valor es divisible entre 2 es verdadera
    console.log("Divisible entre 2.");  // Imprime "Divisible entre 2."
  } else if (valor % 3 == 0) {  // si el valor es divisible entre 3 es verdadera
    console.log("Divisible entre 3.");  // Imprime "Divisible entre 3."
  } else { // si el valor es divisible entre 2 y 3 es falsa
    console.log("No es divisible entre las opciones."); // Imprime "No es divisible entre las opciones."
  }
}

clasificarValor(2);  // Imprime "Divisible entre 2."
clasificarValor(15); // Imprime "Divisible entre 3."
clasificarValor(7); //  Imprime "No es divisible entre las opciones."
