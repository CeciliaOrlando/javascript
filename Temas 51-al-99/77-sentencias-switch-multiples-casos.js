/* Tema: Sentencias switch: múltiples casos.

*/

function clasificarVolumen(valor) {
  let volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  }
  return volumen;
}

clasificarVolumen(1);  // "bajo"
clasificarVolumen(3);  // "intermedio"
clasificarVolumen(5);  // "alto"
