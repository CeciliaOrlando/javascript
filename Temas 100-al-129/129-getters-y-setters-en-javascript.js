/* Tema: Getters y setters en JavaScript.
En Javascript, los getters y setters son funciones que se utilizan para acceder y modificar las propiedades de una clase.
Esto permite controlar el acceso y la modificación de las propiedades de una clase.
*/

class Libro {
  constructor(autor) {
    this._autor = autor;
  }

  // Getter
  get autor() {
    return this._autor;
  }

  // Setter
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("anónimo");
console.log(libro.autor); // anónimo

libro.autor = "Gino Smith";
console.log(libro.autor); // Gino Smith
