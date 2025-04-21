/* Tema: Ciclos "for": contar hacia atrás.
El ciclo "for" se utiliza para contar hacia atrás.
*/

// Ejemplo 1

for (let i = 15; i >= 10; i--) { // es un ciclo for que se repite mientras i sea mayor o igual a 10. i = 15, inicializamos la variable i en 15. i >= 10, se evalua si i es mayor o igual a 10. i-- decrementa la variable i en 1.
  console.log(i); // imprime 15, 14, 13, 12, 11
}

// Ejemplo 2

let miArreglo = [];

for (let i = 10; i > 0; i -= 2) { // es un ciclo for que se repite mientras i sea mayor a 0. i = 10, inicializamos la variable i en 10. i > 0, se evalua si i es mayor a 0. i -= 2, decrementa la variable i en 2. El bucle aavanza de 2 en 2 (2,4,6,8,10,) osea que se repite 5 veces.
  miArreglo.push(i); // imprime 10, 8, 6, 4
}

console.log(miArreglo); // [10, 8, 6, 4]
