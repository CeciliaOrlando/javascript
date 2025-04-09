/* Tema: Manipular arreglos con .pop().
Con el metodo .pop() se pueden eliminar elementos del final de un arreglo.
El metodo .pop() modifica el arreglo original y devuelve el elemento eliminado.
El metodo .pop() elimina el último elemento del arreglo.
*/

let estaciones;

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

estacion = estaciones.pop(); // el .pop remueve el último elemento del arreglo y lo devuelve dentro de la variable que creamos para removerlo del arreglo

console.log(estaciones); // Invierno, Otoño, Primavera
console.log(estacion); // Verano
