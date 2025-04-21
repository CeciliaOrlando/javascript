/* Tema: La palabra reservada const.
En javascript, las variables declaradas con la palabra clave const tienen un alcance global y pueden ser accedidas desde cualquier parte del código. Estas no pueden ser reasignadas.
En cambio, las variables declaradas con la palabra clave let tienen un alcance local y pueden ser accedidas solo dentro del bloque donde se declararon. Estas pueden ser reasignadas.
*/

const MI_CONSTANTE = 35;

console.log(MI_CONSTANTE); // 35

// Error
// MI_CONSTANTE = 15;


function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
      return undefined;
  }

  return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));  //  78.5
console.log(calcularAreaCirculo(10)); // 314
