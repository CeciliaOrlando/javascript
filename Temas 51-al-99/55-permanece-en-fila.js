//* Tema: Permanece en fila.

/* En informática una cola (queue) es una estructura de datos abstracta
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento)
como argumentos. Agrega el número al final del arreglo y luego elimina el primer
elemento del arreglo. La función proximoEnLaFila debe retornar el elemento
que fue removido.
*/

function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo.
  return arreglo.shift(); // Remover el primer elemento y retornarlo.
}

let  miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));  // "Antes: [1, 2, 3, 4, 5]"
console.log(próximoEnLaFila(miArreglo, 6)); // 1
console.log("Después: " + JSON.stringify(miArreglo)); // "Después: [2, 3, 4, 5, 6]"

// JSON.stringify() convierte un arreglo en una cadena JSON [1, 2, 3, 4, 5]. Esto permite mostrarlo en la consola. JSON es un formato de intercambio de datos en JavaScript.
