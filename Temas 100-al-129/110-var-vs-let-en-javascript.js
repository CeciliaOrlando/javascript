/* Tema: var vs. let.
En javaScript, las variables declaradas con la palabra clave var tienen un alcance global y pueden ser accedidas desde cualquier parte del código.
En cambio, las variables declaradas con la palabra clave let tienen un alcance local y pueden ser accedidas solo dentro del bloque donde se declararon.
*/

// Con var podemos declarar una variable más de una vez.
var campista = "James";
var campista = "David";
console.log(campista); // David

// Con let no podemos declarar una variable más de una vez.
let campista = "James";
let campista = "David";
console.log(campista); // Error

// Podemos cambiar el valor de la variable.
let campista = "James";
campista = "David";  	// sin let
console.log(campista); // David
