/* Tema: Sensibilidad a mayúsculas y minúsculas en JavaScript.
JavaScript es sensible a mayúsculas y minúsculas, lo que significa que las variables y funciones con nombres similares pero diferentes en mayúsculas y minúsculas son consideradas diferentes.
Siempre hay que estar muy atento a como escribimos nombres de variables y funciones en JavaScript, para evitar errores */

let miVariable = 5;

console.log(MIVARIABLE); // Error
console.log(Mivariable); // Error
console.log(MIvARIABLE); // Error
console.log(mivariable); // Error

console.log(miVariable);
