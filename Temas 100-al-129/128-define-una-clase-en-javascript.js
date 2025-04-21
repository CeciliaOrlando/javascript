/* Tema: Definir una clase en JavaScript.
En javaScript, una clase es una plantilla que define un conjunto de propiedades y métodos que se pueden reutilizar en objetos.
La clase define la estructura de los objetos, y los objetos son instancias de la clase.
La estructura de la clase se define con la palabra clave "class".
Y los objeto son instancias de la clase, que son objetos que heredan los atributos y métodos de la clase.
*/

class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

let zeus = new TransbordadorEspacial('Júpiter');
console.log(zeus.planeta); // Júpiter

let apolo = new TransbordadorEspacial('Marte');
console.log(zeus.planeta); // Júpiter

// Ejemplo

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let miMascota = new Mascota("Nora", 5); // Nora

console.log(miMascota.nombre); // Nora
console.log(miMascota.edad); // 5

let tuMascota = new Mascota("Gino", 2);
