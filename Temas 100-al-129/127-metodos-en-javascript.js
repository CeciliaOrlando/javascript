/* Tema: Métodos en JavaScript.
En javaScript, los métodos son funciones que se utilizan para realizar acciones en objetos.
Sirven para encapsular la lógica de un objeto y permitir que los objetos realicen acciones.
Se llaman métodos a las funciones que se definen dentro de un objeto.
*/

// Versión ES5

const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

console.log(persona.presentarse()); // ¡Hola! Mi nombre es Isabel.

// Versión ES6

const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

persona.presentarse(); // ¡Hola! Mi nombre es Isabel
