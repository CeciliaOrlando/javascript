/* Tema: Modificar los elementos de un arreglo.

*/

var miArreglo = [10, 20, 30];

console.log(miArreglo); // 10, 20, 30
miArreglo[0] = 40; // modificar el primer elemento del arreglo
console.log(miArreglo); // 40, 20, 30

miArreglo[1] = "Hola"; // modificar el segundo elemento del arreglo
console.log(miArreglo); // 40, Hola, 30

miArreglo[1] = [1, 2, 3]; // modificar el segundo elemento del arreglo
console.log(miArreglo); // 40, 1, 2, 3, 30
