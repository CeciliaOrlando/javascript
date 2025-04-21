/* Tema: Objetos complejos en JavaScript.
Los objetos complejos son estructuras de datos que permiten almacenar datos en pares clave-valor.
En JavaScript, se pueden usar objetos complejos para representar estructuras complejas de datos.
*/

let ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  }
];

console.log(ordenesDePizzas[0]);  // {tipo: 'margarita', tamaño: 'individual', precio: 5.67, toppings: Array(3), paraLlevar: true}
console.log(ordenesDePizzas[1]);  // {tipo: 'cuatro quesos', tamaño: 'familiar', precio: 18.34, toppings: Array(2), paraLlevar: false}

console.log(ordenesDePizzas[0].tipo);  // margarita
console.log(ordenesDePizzas[0]["tipo"]);  // margarita

console.log(ordenesDePizzas[0].precio);   // 5.67
console.log(ordenesDePizzas[0]["precio"]);  // 5.67

// Añadiendo una tercera pizza

let ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  },
  {
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
  }
];
