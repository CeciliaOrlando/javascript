/* Tema: Iterar sobre un arreglo con un ciclo "for".
*/

// Ejemplo 1

let miArreglo = [4, 6, 8, 2];
let total = 0;

for (let i = 0; i < miArreglo.length; i++) {  // Se inicia un bucle for que recorrerá todos los elementos del arreglo.   i = 0: Comienza en la primera posición del arreglo.   i < miArreglo.length: Se ejecuta mientras i sea menor que la longitud del arreglo (en este caso 4).   i++: Aumenta i de uno en uno en cada vuelta.
    total += miArreglo[i]; // Suma el elemento actual al total

    /* Ejemplo paso a paso:
      total = 0 + 4 → total = 4
      total = 4 + 6 → total = 10
      total = 10 + 8 → total = 18
      total = 18 + 2 → total = 20*/
}

console.log(total); // 20

// Ejemplo

let lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());  // JavaScript, PYTHON, JAVA, C++
}

// Ejemplo

function contarNumerosPares(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));  // 0
console.log(contarNumerosPares([5, 3, 1, 2]));  // 1
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));  // 2
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));  // 3
