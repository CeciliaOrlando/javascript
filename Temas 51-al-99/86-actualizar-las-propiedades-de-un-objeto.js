/* Tema: Actualizar las propiedades de un objeto.
Las propiedades de un objeto se pueden actualizar utilizando la notación de punto.
*/

let  mochila = {
  "color": "azul",
  "tamaño": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

console.log(contenido);   // ["botella de agua", "cuaderno"]
mochila.contenido.push("lápiz");
console.log(contenido); // ["botella de agua", "cuaderno", "lápiz"]

mochila.contenido = [];
console.log(mochila.contenido); // []
