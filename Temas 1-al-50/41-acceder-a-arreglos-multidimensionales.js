/* Tema: Acceder a arreglos multidimensionales.
Para acceder a los elementos de un arreglo multidimensional, se utilizan dos pares de corchetes.
El primer par de corchetes indica el índice del arreglo externo, y el segundo par de corchetes indica el índice del arreglo interno.
Por ejemplo, si tenemos un arreglo multidimensional llamado "miArreglo", podemos acceder a sus elementos de la siguiente manera:
miArreglo[0] // Accede al primer arreglo interno
miArreglo[0][0] // Accede al primer elemento del primer arreglo interno
miArreglo[1] // Accede al segundo arreglo interno
miArreglo[1][0] // Accede al primer elemento del segundo arreglo interno
miArreglo[2] // Accede al tercer arreglo interno
miArreglo[2][0] // Accede al primer elemento del tercer arreglo interno*/

let  miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Arreglo:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]

// Acceder a los elementos del primer arreglo.

console.log(miArreglo[0][0]); // 1
console.log(miArreglo[0][1]); // 2
console.log(miArreglo[0][2]); // 3

// Acceder a los elementos del segundo arreglo.

console.log(miArreglo[1][0]); // 4
console.log(miArreglo[1][1]); // 5
console.log(miArreglo[1][2]); // 6
