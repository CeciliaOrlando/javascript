/* Tema: Ciclos "for": números impares.
El for para los números impares se utiliza para crear un arreglo de números impares. Se hace un ciclo for que se repite mientras i sea menor que 20.
*/

miArreglo = []; // Crear un arreglo vacio donde se guardan los numero impares

for (let i = 1; i < 20; i += 2) { // Ciclo for, que se repetira mientras i sea menor que 20. i = 1, inicializamos la variable i en 1. i < 20, se evalua si i es menor que 20. i += 2, incrementa la variable i en 2. Y por eso si empieza con el 1 agrega 2 es tres y asi sucesivamente. 
  miArreglo.push(i); // Agregar i al arreglo
}

console.log(miArreglo); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
