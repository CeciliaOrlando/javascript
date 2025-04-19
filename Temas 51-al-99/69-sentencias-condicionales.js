/* Tema: Sentencias condicionales.
Las sentencias condicionales son estructuras de control que permiten ejecutar un bloque de código si una condición es verdadera.
*/

if (true) {  // si la condición es verdadera
  console.log("La condición es verdadera."); // Imprime "La condición es verdadera."
}

// Condición verdadera (true).

let x = 5;

if (x > 2) {  // si x es mayor que 2 es verdadera
  console.log("La condición es verdadera");  // Imprime "La condición es verdadera."
}

if (x > 2 && x < 10) {  // si x es mayor que 2 y menor que 10 es verdadera
  console.log("La condición es verdadera");  // Imprime "La condición es verdadera."
}

// Ejemplo

let estacion = "Invierno";

if (estacion == "Invierno") {  // si estacion es igual a invierno es verdadera
  console.log("¡Si! Me encanta el invierno.");  // Imprime "¡Si! Me encanta el invierno."
}

console.log("Después del condicional...");  // Imprime "Después del condicional..."
