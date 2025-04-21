/* Tema: Ciclos "for" anidados.
*/

let miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];  // Este es un arreglo bidimensional. Es decir, un arreglo que contiene otros arreglos. Tiene 3 filas: [1, 2, 3], [4, 5, 6], y [7, 8, 9]



// Por cada arreglo anidado
for (let i = 0; i < arreglo.length; i++) {  // Recorremos cada uno de los subarreglos (o "filas").
   let arregloAnidado = miArreglo[i];       // Guardamos el subarreglo actual (la fila) en una variable para trabajar con ella más fácilmente.


  // Por cada elemento del arreglo anidado
  for (let j = 0; j < fila.length; j++) {   // Ahora recorremos los elementos dentro de esa fila.
    console.log(arregloAnidado[j]);          //Imprimimos cada número individual.
  }
}
/*Resultado en la consola:
1
2
3
4
5
6
7
8
9*/
