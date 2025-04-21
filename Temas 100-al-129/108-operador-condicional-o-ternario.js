/* Tema: Operador condicional (ternario).
En javascript se puede usar el operador condicional (ternario) para evaluar una condición y retornar un valor dependiendo de si la condición es verdadera o falsa.
El operador condicional se representa con el символ "?" y se utiliza para realizar una operación condicional. Si la condición es verdadera, se retorna el valor de la primera parte del operador condicional. Si la condición es falsa, se retorna el valor de la segunda parte del operador condicional.
*/

// Con un condicional.

function retornarMinimo(x, y) {
  if (x < y) {
  	return x;
  } else {
  	return y;
  }
}

// Con el operador ternario.

function retornarMinimo(x, y) {
  return x < y ? x : y;
}

console.log(retornarMinimo(4, 7)); // 4
console.log(retornarMinimo(8, 2)); // 2
console.log(retornarMinimo(5, 5)); // 5

// Ejemplo 2

var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3); // 27 . Esta linea se lee como: Si a es mayor que b, entonces a + 2, de lo contrario, b * 3. Como a es mayor que b, entonces a + 2, que es 17, se imprime en la consola.
