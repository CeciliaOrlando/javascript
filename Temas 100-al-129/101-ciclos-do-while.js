/* Tema: Ciclos "do...while" en JavaScript.
Los ciclos "do...while" se usan cuando se desea ejecutar una sección de código al menos una vez, y luego se evaluara si se debe volver a ejecutar la sección de código.
El "do" hace la primera ejecución de la sección de código, y luego evalua la condición. Si la condición es verdadera, se ejecuta la sección de código nuevamente. Y si es falsa, se sale del ciclo.
El "while" se ejecuta la sección de código mientras la condición sea verdadera.
*/

let x = 16;

do {
  console.log(x);  // 16
  x++;             // 17
} while (x < 10);  // 17 < 10 = false

x = 16;

while (x < 10) {  // 16 < 10 = true
  console.log(x); // 16
  x++;            // 17
}
