/* Tema: Mutar un arreglo declarado con const.
En javascript podemos mutar un arreglo declarado con la palabra clave const. Esto significa que podemos modificar sus elementos, pero no podemos cambiar el arreglo completo. Lo podemos hacer con el indice de la notación de corchetes.
*/

const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [5, 6, 7, 8]; // Error porque usamos const

// Pero sí podemos mutar el arreglo con la notación de corchetes
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO); // [5, 6, 7, 8]
