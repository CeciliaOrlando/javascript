/* Tema: Eliminar propiedades en un objeto de JavaScript.
Para eliminar una propiedad de un objeto en JavaScript, se utiliza la palabra clave delete. 
*/

let curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

console.log(curso.duracion); // 30
delete curso.duracion;
console.log(curso.duracion); // undefined

console.log(curso.idioma);   // Español
delete curso.idioma;
console.log(curso.idioma);   // undefined

console.log(curso.titulo);   // Aprende JavaScript desde Cero
delete curso.titulo;
console.log(titulo);         // undefined
