const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro)  ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20, 10));
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Howkey',
    // Aquí también podemos agregar operador ternario
    amigo ? 'Thor' : 'Loki',
    // Podemos agregar todo tipo de valores, funciones y objetos
    (() => 'Nick Fury')(), // Esta es una función anónima que se autollama a sí misma.
    elMayor(50, 30),
];

console.log(amigosArr);

// Con el operador ternario podemos trabajar con muechas condiciones
const nota = 98;
const grado = (nota >= 95) ? 'A+' :
               nota >= 90  ? 'A'  :
               nota >= 85  ? 'B+' :
               nota >= 80  ? 'B'  :
               nota >= 75  ? 'C+' :
               nota >= 70  ? 'C'  : 'F';

console.log({grado});



