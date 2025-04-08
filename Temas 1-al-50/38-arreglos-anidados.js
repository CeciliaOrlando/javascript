/* Tema: Arreglos anidados en JavaScript.
Los arreglos anidados son arreglos que contienen otros arreglos como elementos.
Esto permite crear estructuras de datos más complejas, como matrices o tablas.
Los arreglos anidados pueden ser útiles para representar datos en forma de filas y columnas, como una hoja de cálculo o una base de datos.
Los arreglos anidados también pueden ser utilizados para almacenar datos jerárquicos, como árboles o grafos.
Los arreglos anidados pueden ser accedidos utilizando múltiples índices, uno para cada nivel de anidación.
Por ejemplo, para acceder al primer elemento del segundo arreglo en un arreglo anidado, se puede utilizar la sintaxis: arreglo[1][0].
Los arreglos anidados pueden ser modificados de la misma manera que los arreglos simples, utilizando el índice correspondiente para acceder al elemento deseado.
Los arreglos anidados pueden ser recorridos utilizando bucles anidados, donde el bucle exterior recorre el arreglo principal y el bucle interior recorre cada arreglo secundario.
Los arreglos anidados pueden ser utilizados para almacenar datos de manera más organizada y estructurada, lo que facilita su manipulación y análisis.
Los arreglos anidados pueden ser utilizados para representar datos en forma de filas y columnas, como una hoja de cálculo o una base de datos.
*/

var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes); //  Nora, 97, Gino, 78

var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
console.log(listaDeProductos); //  Camisa, 5.67, S134

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(datos); // 3.4, 5.6, 3.2, 6.7, 4.5, 7.8, 5.6, 3.4, 7.8
