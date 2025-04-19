/* Tema: Valor "undefined" retornado por una función.
Tenemos el valor "undefined" porque no hemos establecido la sentencia return
*/

function sumar(a, b) {
  console.log(a + b);
}

// undefined porque no hay una sentencia return
console.log(sumar(a, b));
