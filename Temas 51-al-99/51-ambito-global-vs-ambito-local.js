/* Tema: Ámbito global vs. ámbito local en funciones.
El ámbito global se refiere a las variables declaradas fuera de las funciones.
El ámbito local se refiere a las variables declaradas dentro de las funciones.
*/

let  miNombre = "Nora";

function mostrarMiNombre() {
  let miNombre = "Gino"; // Gino -variable local
}

mostrarMiNombre(); // Gino - variable local, llamo a la funcion donde esta la variable local

console.log(miNombre); // Nora - variable global llamada fuera de la funcion. estamos por fuera de la funcion 
