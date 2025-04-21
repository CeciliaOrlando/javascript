/* Tema: Añade nuevas propiedades a un objeto de JavaScript.
Para añadir una nueva propiedad a un objeto en JavaScript, se utiliza la notación de punto o la notación de corchetes.
*/

let curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

// Notación de punto
console.log(curso.vistas); // undefined porque no existe
curso.vistas = 34500;     // Agrega la propiedad "vistas" al objeto
console.log(curso.vistas); // 34500 - yapuedo acceder a esta prpiedad con la notacion de punto

// Notación de corchetes
curso["vistas"] = 34500;  // Notación de corchetes
console.log(curso.vistas);  // 34500
