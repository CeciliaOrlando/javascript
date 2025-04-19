/* Tema: Cláusula "else" en sentencias condicionales.
Las cláusulas "else" son estructuras de control que permiten ejecutar un bloque de código si una condición es falsa.
*/

if (false) {  // si la condición es falsa
  console.log("La condición es verdadera.");  // No se imprime
} else {
  console.log("La condición es falsa.");  // Imprime "La condición es falsa."
}

// Ejemplo

let x = 5;

if (x < 2) {  // si x es menor que 2 es falsa
  console.log("La condición es verdadera."); // No se imprime
} else { // si x es menor que 2 es falsa
  console.log("La condición es falsa.");  // Imprime "La condición es falsa."
}

// Ejemplo

let estacion = "Invierno";

if (estacion === "Verano") { // si estacion es igual a verano es verdadera
  console.log("Comenzó el verano. Ya podemos ir a la playa.");  // Imprime "Comenzó el verano. Ya podemos ir a la playa."
} else { // si estacion es igual a verano es falsa
  console.log("Ya quiero que llegue el verano para poder ir a la playa");  // Imprime "Ya quiero que llegue el verano para poder ir a la playa"
}
 // 
