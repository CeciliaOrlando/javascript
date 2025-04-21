/* Tema: Objetos anidados.
Los objetos anidados son estructuras de datos que permiten almacenar datos en pares clave-valor.
Los objetos anidados permiten crear estructuras como tener un objeto dentro de otro
*/

let  miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);  // mi postre favorito
console.log(miReceta.costo);         // 15.6
console.log(miReceta.ingredientes);   // {masa: {...}, cobertura: {...}}

console.log(miReceta.ingredientes.masa);  // {harina: '100 grs', sal: '1 cucharadita', agua: '1 taza'}

console.log(miReceta.ingredientes.masa.harina);  // 100 grs
console.log(miReceta.ingredientes.masa.sal);     // 1 cucharadita
console.log(miReceta.ingredientes.masa.agua);    // 1 taza

console.log(miReceta.ingredientes.masa["harina"]);    // 100 grs
console.log(miReceta.ingredientes.masa["sal"]);       //  1 cucharadita
console.log(miReceta.ingredientes.masa["agua"]);      // 1 taza

console.log(miReceta.ingredientes.cobertura);     // {azucar: '120 grs', chocolate: '4 cucharadas', mantequilla: '200 grs'}

console.log(miReceta.ingredientes.cobertura.azucar);  // 120 grs
console.log(miReceta.ingredientes.cobertura.chocolate);   // 4 cucharadas
console.log(miReceta.ingredientes.cobertura.mantequilla);   // 200 grs
