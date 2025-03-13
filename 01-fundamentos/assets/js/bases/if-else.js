// Sentencia if

let a = 5;

// Esta condición se evalúan booleanos, null, undefined, asignaciones.
if (a >= 10) {
    console.log('a es mayor o igual a 10');
} else {
    console.log('a es menor a 10');
}

console.log('Fin de programa.');

// Ejercicio con días de la semána
const hoy = new Date(); // Date es un objeto "{}"
let dia = hoy.getDay(); // 0: Domingo, 1: Lúnes, 2: Martes....., 6: Sábado.

console.log({dia});

// El doble igual == es una comparación suave, o sea que permite comparar valores sin importar el tipo de dato.
// Triple igual === es una comparación fuerte, compara los valores y respetando el tipo de dato que tienen que ser iguales.
if (dia === 0) {
    console.log('Domingo');
} else if(dia === 1) {
    console.log('Lúnes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es Domingo, lúnes o martes.');
}


// Alternativa sin usar else if
// Con Objeto
let diaActual1 = 1;
const diasLetras1 = {
    // Lo hacemos con función flecha para poder manipular las respuestas
    0: () => 'Domingo - 0',
    1: () => 'Lúnes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado 6- ',
}

// Y para llamar a la función lambda debemos agregar los paréntesis
console.log(diasLetras1[diaActual1]() || 'Día no definido.');

// Con arreglo
let diaActual2 = 10;

const diasLetras2 = [
    'Domingo',
    'Lúnes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

console.log(diasLetras2[diaActual2] || 'Día no definido.');

