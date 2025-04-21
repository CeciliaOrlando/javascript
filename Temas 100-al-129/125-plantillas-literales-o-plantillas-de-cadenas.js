/* Tema: Plantillas literales o plantillas de cadenas.
En javaScript, las plantillas literales o plantillas de cadenas son cadenas de texto que se pueden utilizar para crear cadenas de texto dinámicas. 
*/

/*
Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/

let a = 6;
console.log(`El valor de a es ${a}.`); // El valor de a es 6

let nombre  = "Nora";
let edad = 6;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`); // Mi nombre es Nora y tengo 6 años.

let miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es: ${JSON.stringify(miArreglo)}`); // El arreglo es: [1, 2, 3, 4]

// Ejemplo con objeto

const persona = {
  nombre: "Gino Cass",
  edad: 10
};

const saludo = `¡Hola! Mi nombre es ${persona.nombre}
y tengo ${persona.edad} años.`;

console.log(saludo); // ¡Hola! Mi nombre es Gino Cass y tengo 10 años.
