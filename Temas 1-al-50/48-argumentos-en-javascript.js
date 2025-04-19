/*Tema: Argumentos en JavaScript.
Los argumentos son los valores que se pasan a una función cuando se llama.
Los argumentos se pasan a la función utilizando parámetros.
*/

function sumar(a, b) {
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3); // 8
sumar(8, 9); // 17
sumar(2, 4); //
sumar(5, 5); //

// Podemos pasar variables como argumentos y sus nombres no tienen que ser iguales a lo parámetros. Aca reasignamos el valor de a y b por el de x y y.
let x = 5;
let y = 3;

sumar(x, y); // 8

// Ejemplo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3); // "Estoy aprendiendo a programar"
}

concatenarTresCadenas("Estoy", "aprendiendo" , "a programar");
