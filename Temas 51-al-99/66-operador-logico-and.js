/* Tema: Operador lógico "and" en JavaScript.
El operador lógico "and" (&&) compara dos expresiones. */

/*
   Tabla de verdad del operador AND
   Para: X && Y
   |  X  |  Y  | X && Y |
   -----------------------
   |  T  |  T  |    T   |
   |  T  |  F  |    F   |
   |  F  |  T  |    F   |
   |  F  |  F  |    F   |
    La expresión solo es verdadera cuando ambos operandos son verdaderos.*/

// Comprobemos la tabla de verdad
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Ahora los operandos son expresiones

let  a = 8;

// (a > 5) && (a < 10) --> true && true --> true
console.log((a > 5) && (a < 10));  // true

a = 3;

// (a < 5) && (a <= 10) --> false && true --> false
console.log((a < 5) && (a <= 10));  // false

a = 15;

// (a >= 5) && (a > 10) --> true && false --> false
console.log((a >= 5) && (a > 10));  // false

a = 1;

// (a == 5) && (a > 10) --> false && false --> false
console.log((a == 5) && (a > 10));  // false
