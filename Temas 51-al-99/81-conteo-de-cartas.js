/* Descripción:

En el juego de casino Blackjack el jugador puede sacarle
ventaja a la casa llevando un registro del número relativo
de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el
jugador. Se le asigna un valor a cada carta de acuerdo a
la siguiente tabla.

- Cuando el conteo es positivo, el jugador debería apostar alto.
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.


Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'


Nuestra meta es definir una función para contar cartas.

La función debe tomar un parámetro carta que puede ser
un número o una cadena de caracteres y luego aumentar
o reducir el valor de la variable global conteo
de acuerdo al valor de la carta (observa la tabla).

La función debe retornar una cadena de caracteres con el
conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo.

El conteo actual y la decisión del jugador
("Apostar" o "Esperar") deben estar separados por un espacio.
*/

let conteo = 0;  // variable global que representa el conteo que tiene el jugador y comienza en cero y esta por furera de la funcion

function contarCartas(carta) { // funcion que recibe un parametro carta
  var decision; // variable local que representa la decision del jugador esta dentro de la funcion

  switch (carta) { // segun el valor de la carta se aumenta o disminuye el conteo
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;  // aumenta el conteo
        break;     // termina el switch
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;  // disminuye el conteo
        break;     // termina el switch
  }

  if (conteo > 0) {          // si el conteo es mayor a cero
    decision = "Apostar";   // la decision es apostar
  } else {                  // si el conteo es menor o igual a cero
    decision = "Esperar";   // la decision es esperar
  }

  return conteo + " " + decision;  // retorna el conteo y la decision
}

contarCartas(2);  // llama a la funcion contarCartas con el parametro 2 y  aumenta el conteo
contarCartas(3);  // llama a la funcion contarCartas con el parametro 3 y aumenta el conteo
contarCartas(7);  // llama a la funcion contarCartas con el parametro 7 y disminuye el conteo
contarCartas("K");  // llama a la funcion contarCartas con el parametro "K" y disminuye el conteo
contarCartas("A");  // llama a la funcion contarCartas con el parametro "A" y disminuye el conteo
