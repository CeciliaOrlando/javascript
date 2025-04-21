/* Tema: Arreglos anidados.
Los Arreglos anidados son estructuras de datos que permiten almacenar datos en pares clave-valor.
Los arreglos anidados permiten crear estructuras como tener un arreglo dentro de otro
*/

let misPlantas = [
  {
    tipo: "flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de león"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedul"
    ]
  }
];

let primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor); // rosas

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol); // pino
