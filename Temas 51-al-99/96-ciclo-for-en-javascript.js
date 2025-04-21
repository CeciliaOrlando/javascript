/* Tema: Ciclo "for" en JavaScript.
El ciclo "for" se utiliza para ejecutar un bloque de instrucciones un numero determinado de veces.
*/

// Ejemplo 1

let miArreglo = [];  // Crear una variable miArreglo y asignarle un arreglo vacio

for (let i = 0; i < 10; i++) { // Se crea un bucle for, que se repetira mientras i sea menor que 10. let 1= 0, inicializamos la variable i en 0. i < 10, se evalua si i es menor que 10. i++ incrementa la variable i en 1.
  miArreglo.push(i); // Agregar i al arreglo miArreglo
}

console.log(miArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ejemplo 2

let miArreglo = [];

for (let i = 0; i < 10; i += 2) {  // Se crea un bucle for, que se repetira mientras i sea menor que 10. let 1= 0, inicializamos la variable i en 0. i < 10, se evalua si i es menor que 10. i++ incrementa la variable i en 2. El bucle aavanza de 2 en 2 (2,4,6,8,10,) osea que se repite 5 veces. y en cada vuelta se agrega "A" al arreglo miArreglo
  miArreglo.push("A"); // Agregar "A" al arreglo miArreglo
}

console.log(miArreglo); // ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
