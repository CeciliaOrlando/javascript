/* Tema: Encadenar sentencias if else.
La condicion Else se usa para encadenar sentencias if. cuando tengo mas de una condicion en la misma sentencia que comprobar si una condicion es verdadera o falsa.
*/

function interpretarIMC(indiceDeMasaCorporal) { // función para interpretar el IMC ingresado
  if (indiceDeMasaCorporal < 18.5) { // si el IMC es menor que 18.5 es verdadera
    console.log("Bajo Peso"); // Imprime "Bajo Peso"
  } else if (indiceDeMasaCorporal <= 24.9) { // si el IMC es menor o igual que 24.9 es verdadera
    console.log("Normal"); // Imprime "Normal"
  } else if (indiceDeMasaCorporal <= 29.9) { // si el IMC es menor o igual que 29.9 es verdadera
    console.log("Sobrepeso"); // Imprime "Sobrepeso"
  } else { // si el IMC es mayor que 29.9 es verdadera
    console.log("Obeso"); // Imprime "Obeso"
  }
}

interpretarIMC(17.8);  // Imprime "Bajo Peso"
interpretarIMC(22.2);  // Imprime "Normal"
interpretarIMC(28.5);  // Imprime "Sobrepeso"
interpretarIMC(32.2);  // Imprime "Obeso"
