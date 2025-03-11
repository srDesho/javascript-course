// Los arreglos son contenedores de tipos de datos, generalmente los tipos de datos son iguales, pero también se 
// puede tener arreglos de distintos tipos de datos.

// Formas de crear arreglos.
// const arr = new Array(10);
const arr = [];
console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});
console.log(videoJuegos[0]);

// En js podemos tener arreglos que contienen diferentes tipos de datos.
let arregloCosas = [
    true,
    123,
    'Cristian',
    1 + 3,
    function(){},
    ()=>{},
    {a: 1},
    // También podemos tener arreglos dentro de arreglos.
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',

    ]],
     
]

// console.log({arregloCosas});

// Obteniendo datos de los arreglos.
console.log(arregloCosas[0]);

// Obteniendo dato de arreglos que están dentro de un arreglo
console.log(arregloCosas[7][4][1]);