/* Tema: Código de Golf */

/*
En el juego de golf cada hoyo tiene un par que
representa el número promedio de golpes
que se espera que haga un golfista para introducir
la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan
por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra
los golpes en orden de mayor a menor prioridad:

Golpes             Retornar
-------------------------------
1	               "Hole-in-one!"
<= par - 2	       "Eagle"
par - 1	           "Birdie"
par	               "Par"
par + 1	           "Bogey"
par + 2	           "Double Bogey"
>= par + 3	       "Go Home!"

par y golpes siempre serán numéricos y positivos.
*/

function puntajeDeGolf(par, golpes) { // funcion puntajeDeGolf con parametros par y golpes
  if (golpes == 1) {                  // si golpes es igual a 1
    return "Hole-in-one!";            // retorna "Hole-in-one!"
  } else if (golpes <= par - 2) {     // si golpes es menor o igual a par - 2
    return "Eagle";                   // retorna "Eagle"
  } else if (golpes == par - 1) {     // si golpes es igual a par - 1
    return "Birdie";                  // retorna "Birdie"
  } else if (golpes == par) {         // si golpes es igual a par
    return "Par";                     // retorna "Par"
  } else if (golpes == par + 1) {     //  si golpes es igual a par + 1
    return "Bogey";                   //  retorna "Bogey"
  } else if (golpes == par + 2) {     // si golpes es igual a par + 2
    return "Double Bogey";            // retorna "Double Bogey"
  } else if (golpes >= par + 3) {     //  si golpes es mayor o igual a par + 3
    return "Go Home!";                // retorna "Go Home!"
  }
}

puntajeDeGolf(4, 1);  // Hole-in-one!
puntajeDeGolf(4, 2);  // Eagle
puntajeDeGolf(4, 3);  // Birdie
puntajeDeGolf(4, 4);  // Par
puntajeDeGolf(4, 5);  // Bogey
puntajeDeGolf(4, 6);  // Double Bogey
puntajeDeGolf(4, 7);  // Go Home!
puntajeDeGolf(4, 15); // Go Home!
