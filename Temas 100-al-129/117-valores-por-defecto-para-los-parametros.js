/* Tema: Valores por defecto para los parámetros.
En Javascript se pueden asignar valores por defecto a los parámetros de una función. Esto significa que si la llamada a la función no pasa un valor para el parámetro, se utilizara el valor por defecto.
*/

const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5));    // Valor por defecto, que da por resultado 6
console.log(incrementar(5, 3)); // Valor personalizado, que da por resulado 8 
