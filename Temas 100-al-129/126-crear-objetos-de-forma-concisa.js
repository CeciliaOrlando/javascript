/* Tema: Crear objetos de forma concisa.
*/

// Inicialmente

const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};

console.log(crearPersona("Gino Smith", 28, "Español")); // { nombre: 'Gino Smith', edad: 28, idioma: 'Español' }

// Alternativa más concisa

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español")); // { nombre: 'Gino Smith', edad: 28, idioma: 'Español' }
