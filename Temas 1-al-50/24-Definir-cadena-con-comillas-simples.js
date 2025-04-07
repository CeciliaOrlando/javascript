/* Tema: Definir cadenas con comillas simples.
Son dos fotmas de usar distintos tipos de commilas */

let  miMeta;

// mensaje = "Aprender a programar con "freeCodeCamp""; // Error

miMeta = "Aprender a programar con \"freeCodeCamp\""; // Opción previa

// Alternativa más concisa: usar otro tipo de comillas.

miMeta = 'Aprender a programar con "freeCodeCamp"'; // Opción 1 commilas simples en el string principal y dobles dentro de la cadena

miMeta = "Aprender a programar con 'freeCodeCamp'"; // Opción 2 comillas dobles en el string principal y simples dentro de la cadena

console.log(miMeta);
