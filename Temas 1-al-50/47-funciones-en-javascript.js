/* Tema: Funciones en JavaScript.
Las funciones son bloques de código que se pueden reutilizar.
Las funciones pueden recibir parámetros y devolver valores.
Las funciones se pueden declarar de varias formas:
1. Declaración de función:
   function nombreFuncion(parametros) {
     // Código a ejecutar
   }
2. Expresión de función:
   var nombreFuncion = function(parametros) {
     // Código a ejecutar
   }
3. Función de flecha:
   var nombreFuncion = (parametros) => {
     // Código a ejecutar
   }
4. Función anónima:
   var nombreFuncion = function(parametros) {
      // Código a ejecutar
    }
5. Función autoinvocada:
   (function(parametros) {
      // Código a ejecutar
    })();
6. Función de retorno:
   function nombreFuncion(parametros) {
     return valor;
   }
7. Función de callback:
   function nombreFuncion(parametros, callback) {
     // Código a ejecutar
     callback();
   }
8. Función de promesa:
   function nombreFuncion(parametros) {
     return new Promise((resolve, reject) => {
       // Código a ejecutar
       resolve(valor);
     });
   }
*/

function mostrarMensaje() {
  console.log("¡Hola, Mundo!");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
