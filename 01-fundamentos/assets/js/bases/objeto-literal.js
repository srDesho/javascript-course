// Js tiene 2 tipos de datos principales
// Los primitivos y los objetos.

// Existen también los objetos literales que son los objetos que tienen pares de valores.
// Los objetos literales de js en python son como los diccionarios.

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    // Podemos agregar también otros objetos dentro.
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    // ultima pelocula: Infinity War // No es recomendable usar espacios ni guiones simples como "ultima-película"
    // si necesitamos hacerlo pues lo creamos entre commillas.
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);

// Maneras de llamar a los datos del objeto literal
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

// Obteniendo valores de objetos anidados
console.log('Coords', personaje.coords)
console.log('CoordsLat', personaje.coords.lat);

// Obteniendo datos de un array
console.log('No. de trajes', personaje.trajes.length);
console.log('Últ. traje',personaje.trajes[personaje.trajes.length - 1]);

// Podemos crear variables o constantes con los nombres de las llaves(índices del objeto literal).
const x = 'vivo';
console.log(personaje[x]);

// Hacemos llamado a un valor que tiene la llave entre comillas.
console.log('Última peli', personaje['ultima-pelicula']); // VSC automáticamente nos lo agrega la llave entre corchetes y comillas.


// Más detalles
// Borrar un elemento del objeto literal
delete personaje.edad;
console.log(personaje);

// Agregar un nuevo valor.
personaje.casado = true;

// Trabajar el objeto literal como arreglos
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Si queremos que nuestro objeto sea inmutable, debemos hacer uso del método Object.freeze()
Object.freeze(personaje);
// Agregamos otro elemento para ver si nuestro objeto ya es inmutable
personaje.dinero = 10000000000000000000;
// Aparte de bloquear la asignación de nuevos elementos, también no podremos hacer asiganciones 
// a los elementos existentes.
personaje.casado = false;
// El inconventiente del método .freeze es que al hacer freeze sólo al objeto padre sí se puede cambiar 
// los elementos de los objetos anidados.
personaje.direccion.ubicacion = 'Bolivia';

// Si queremos congelar también los objetos anidados simplemente les hacemos un freeze
// Object.freeze(personaje.direccion);

console.log(personaje);


// Si queremos un una lista de los elementos del objeto literal
const propiedades = Object.getOwnPropertyNames(personaje); // Esto para ver las propiedades
const valores = Object.values(personaje); // Si queremos ver los valores.
console.log({propiedades}); // Nos devolverá una lista sólo de los nombres de las llaves.
console.log({valores}); // Nos devolverá una lista sólo de los valores de las llaves.

