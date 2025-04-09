/* Tema: Manipular arreglos con .unshift().
Con el metodo .unshift() podemos agregar un elemento al principio de un arreglo.
El método .unshift() devuelve la nueva longitud del arreglo.
*/

let estaciones = ["Invierno", "Otoño", "Primavera"];

estaciones.unshift("Verano");   // Agregar al principio del arreglo

console.log(estaciones); // Verano, Invierno, Otoño, Primavera
