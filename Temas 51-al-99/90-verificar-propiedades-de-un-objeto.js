/* Tema: Verificar las propiedades de un objeto.
Las propiedades de un objeto se pueden verificar utilizando la propiedad hasOwnProperty.
Esto me permite saber si un objeto tiene una propiedad en particular. 
*/

let  miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));  // true
console.log(miCuaderno.hasOwnProperty("origen")); // false

// Ejemplo

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));
