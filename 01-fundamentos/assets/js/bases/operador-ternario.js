/* 
 *Días de semána abrimos a las 11,
 *pero los fines de semána abrimos a las 9.
 */

 // Entra a un sitio web para consultar si está abierto hoy....

 const dia = 0;
 const horaActual = 10;

 let horaApertura;
 let mensaje; // Está abierto, está cerrado, hoy abrimos a las XX

 // Podemos resumir este if con un arreglo y usando el método includes()
 // if (dia === 0 || dia === 6) {
//  if ([0, 6].includes(dia)) {
//     console.log('Fín de semána.');
//     horaApertura = 9;
//  } else {
//     console.log('Día de semána.');
//     horaApertura = 11;
//  }

//  if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto.';
//  } else {
//     mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`;
//  }

// Aplicando la operación cternaria sería de la siguiente manera:
// Entre paréntesis hacemos la condición(Aunque no es necesario los paréntesis es buena práctica ponerlos)
// seguido del signo ? que es donde termina la condición escribimos el valor del si.
// seguido escribimos los : que viene a ser el else seguido escribimos el valor del mismo.
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = (horaApertura >= horaActual) ? 'Está abierto.' : `No cerrado, abrimos a las ${horaApertura}`;

