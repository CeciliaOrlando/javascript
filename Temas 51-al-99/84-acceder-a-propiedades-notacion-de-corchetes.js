/* Tema: Acceder a propiedades: notación de corchetes.
Tambien podemos acceder a propiedades de un objeto utilizando la notación de corchetes.
La diferencia entre la notación de punto y la notación de corchetes es que la notación de corchetes se utiliza cuando el nombre de la propiedad contiene espacios.
*/

let miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
};

console.log(miCuaderno["color"]); // Notación de corchetes
console.log(miCuaderno.color);    // Notación de punto

console.log(miCuaderno["numero de paginas"]); // Notación de corchetes
// console.log(miCuaderno.numero de paginas); // No funciona porque tiene espacios


// Posibles modificaciones

// camelCase (más común)
let miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numeroDePaginas": 200,
  "numeroDeHojas": 100
};

console.log(miCuaderno.numeroDePaginas);  // Notación de punto
console.log(miCuaderno.numeroDeHojas); // Notación de punto
