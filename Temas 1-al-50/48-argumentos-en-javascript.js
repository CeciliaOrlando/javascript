/*Tema: Argumentos en JavaScript.
Los argumentos son los valores que se pasan a una función cuando se llama.
Los argumentos se pasan a la función utilizando parámetros.
*/

function sumar(a, b) {
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3); //
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);

// Podemos pasar variables como argumentos
// y sus nombres no tienen que ser iguales a los
// parámetros.
let x = 5;
let y = 3;

sumar(x, y);

// Ejemplo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
