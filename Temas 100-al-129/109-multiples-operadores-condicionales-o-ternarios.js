/* Tema: Múltiples operadores condicionales (ternarios).
En javascript se pueden utilizar múltiples operadores condicionales (ternarios) para realizar operaciones condicionales.
*/

function compararNumeros(a, b) {
  if (a === b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

// Con el operador condicional (ternario).

function compararNumeros(a, b) {
  return a === b ? "a y b son iguales"
       : a > b ? "a es mayor que b"
       : "b es mayor que a";
}

console.log(compararNumeros(11, 27)); // a es mayor que b
console.log(compararNumeros(27, 11)); // b es mayor que a
console.log(compararNumeros(15, 15)); // a y b son iguales
