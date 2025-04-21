/* Tema: Sintaxis de desestructuración (objetos).
En Javascript se puede usar la sintaxis de desestructuración para obtener las propiedades de un objeto.
Esto permite obtener los valores de las propiedades de un objeto y asignarlos a variables individuales.
*/

// Para Objetos
const usuario = {
  nombre: "Gino Smith",
  edad: 34
};

// Forma anterior de asignar las propiedades a variables
const nombre = usuario.nombre;
const edad = usuario.edad;

// En ES6
const {nombre, edad} = usuario;

// Ejemplo

let coordenadas = {
  x: 4,
  y: 6,
  z: 12
};

// Anteriormente.
let x = coordenadas.x;
let y = coordenadas.y;
let z = coordenadas.z;

// Ahora podemos usar la sintaxis de desestructuración.
const {x, y, z} = coordenadas;
console.log(x); // 4
console.log(y); // 6
console.log(z); // 12
