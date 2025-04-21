/* Tema: Sintaxis de desestructuración (Objetos Anidados).
*/

const usuario = {
  johnDoe: {
    edad: 27,
    correo: "johnDoe@freecodecamp.com"
  }
};

const { johnDoe: { edad, correo }} = usuario;

console.log(edad); // 27
console.log(correo); // johnDoe@freecodecamp.com

// Asignar nombres distintos a las variables

const { johnDoe: { edad: edadDelUsuario, correo: correoDelUsuario }} = usuario;

console.log(edadDelUsuario); // 27
console.log(correoDelUsuario); //

// Ejemplo

const PRONOSTICO_LOCAL = {
  "ayer": {
    minima: 61,
    maxima: 75
  },
  "hoy": {
    minima: 64,
    maxima: 77
  },
  "mañana": {
    minima: 68,
    maxima: 80
  }
};

const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// Asignar las propiedades individualmente

const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy); // 64

const {hoy: {maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(maximaHoy); // 77

// Asignar ambas propiedades

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy); // 64 77
