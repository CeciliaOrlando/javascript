/* Tema: Objetos para hacer búsquedas.
Los objetos para hacer busquedas son estructuras de datos que permiten almacenar datos en pares clave-valor.
En JavaScript, se pueden usar objetos para hacer búsquedas en un arreglo de objetos.

*/

// Inicialmente es una sentencia switch
// y vamos a reemplazarla con un objeto.

function buscarElementoQuimico(simbolo) {
  let elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}

console.log(buscarElementoQuimico("Al"));  // Aluminio
console.log(buscarElementoQuimico("S"));  // Azufre
console.log(buscarElementoQuimico("Cl"));  // Cloro
console.log(buscarElementoQuimico("He"));  // Helio
console.log(buscarElementoQuimico("B"));  // Boro
console.log(buscarElementoQuimico("Li")); // Litio

// Podemos cambiar switch por un objeto.

// function buscarElementoQuimico(simbolo) {
//   var simbolosQuimicos = {
//     "Al": "Aluminio",
//     "S": "Azufre",
//     "Cl": "Cloro",
//     "He": "Helio",
//     "B": "Boro",
//     "Li": "Litio"
//   };
//   return simbolosQuimicos[simbolo];
// }

// console.log(buscarElementoQuimico("Al"));
// console.log(buscarElementoQuimico("S"));
// console.log(buscarElementoQuimico("Cl"));
// console.log(buscarElementoQuimico("He"));
// console.log(buscarElementoQuimico("B"));
// console.log(buscarElementoQuimico("Li"));
