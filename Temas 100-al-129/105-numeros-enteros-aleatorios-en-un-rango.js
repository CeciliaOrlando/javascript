/* Tema: Números enteros aleatorios en un rango.
En JavaScript se pueden generar números enteros aleatorios con la función Math.floor().
En javascript el rango de números aleatorios se obtiene con la resta de dos números enteros.
*/

function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior; // Math.random() es un metodo que genera un número aleatorio entre 0 y 1. En este ejemplo se utiliza para generar un número aleatorio entre 3 y 8. El +1 se utiliza para incluir el número superior en el rango. El +2 se utiliza para incluir el número inferior en el rango. limiteSuperior - limiteInferior + 1 se utiliza para obtener el rango de números aleatorios.  
}

console.log(rangoAleatorio(3, 8)); // 3, 4, 5, 6, 7, 8

// Con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3, 8)); // 3, 4, 5, 6, 7, 8
}
