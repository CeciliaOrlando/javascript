/* Tema: Búsqueda de perfiles.
*/

let contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (let i = 0; i < contactos.length; i++) { // Recorremos los contactos en la lista.
    if (contactos[i].nombre === nombre) {  // Si el contacto tiene el nombre buscado, devuelve el valor de la propiedad.
        return contactos[i][propiedad] || "La propiedad no existe";  // Si la propiedad no existe, devuelve "La propiedad no existe".
    }
  }
  return "El contacto no está en la lista";
}

buscarPerfil("Nora", "gustos"); //  ["Pizza", "Programación"]
buscarPerfil("Harry", "apellido"); // "Potter"
buscarPerfil("Sherlock", "apellido"); // "Holmes"

buscarPerfil("Nora", "dirección"); // La propiedad no existe.
buscarPerfil("Bob", "numero");     // El contacto no existe.
