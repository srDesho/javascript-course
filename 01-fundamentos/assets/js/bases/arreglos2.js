// Cuando trabajamos con arreglos js nos brinda métedos para poder trabajar.

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// Podemos usar el .length para saber el largo de nuestro arreglo.
console.log('Largo', juegos.length);

// Podemos realizar operaciones
let primero = juegos[2-2]; 
let ultimo = juegos[juegos.length - 1];

console.log(primero); // Este obtiene el valor de la posición 0
console.log(ultimo); // De esta manera podemos obtener el valor de la última posición.
// Asó lo devolvemos como un objeto arreglo
console.log({primero, ultimo});

// Tenemos el método foreach que es el que nos devuelve cada uno de los elementos de nuestro arreglo.
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// Método .push() para agregar un nuevo elemento al final de un arreglo.
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Método .unshift() agregar un elemento al comienzo de un arrelgo
nuevaLongitud = juegos.unshift('COD Mobile');
console.log({nuevaLongitud, juegos})

// Método .pop() para borrar el último elemento
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

// Método .splice() Borrar elementos en una posición dada o sea el o los que querramos a partir de una posición.
let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(1, 2);
console.log({juegosBorrados, juegos})

// Método .indexOf("CaSeSeNsItIvE") para saber el índice de un elemento buscado por su valor.
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});