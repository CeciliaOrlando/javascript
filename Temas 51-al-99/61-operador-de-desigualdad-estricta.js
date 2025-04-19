/* Tema: Operador de desigualdad estricta.
El operador de desigualdad estricta (!==) compara tanto el valor como el tipo de dato.
*/

console.log(1 != "1");  // false 1 es igual que 1 por eso es false
console.log(1 !== "1"); // true 1 es diferente que 1 por eso es true (No compara si son iguales. Compara si son el mismo objeto en memoria) son diferentes tipo de datos (number y el otro es string)
