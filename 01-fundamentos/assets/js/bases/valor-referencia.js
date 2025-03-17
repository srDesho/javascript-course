// Existen 2 formas de pasar parámetros en js, uno es por valor y otro por referencia.
// Cuando trabajamos con datos primitivos es que estamos pasando por valor esto significa que cuando asignamos
// nuevos valor al valor este no afecta en el mismo lugar en memoria estamos pasando únicamente el valor.

// En cambio cuando trabajamos con Objetos estos siempre se pasan por referencia y afectan al mismo lugar en memoria.

let a = 10;
let b = a;
a = 40;
console.log(a, b);

let juan = {nombre: 'Juan'};
// Para poder romper la referencia y tener una copia de un objeto lo hacemos con el spread operator "..."
// Estos 3 puntos cuando se usan fuera de una función(...argumentos) lo que hace es seperar los elementos de
// los objetos.
let ana  = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

// Vemos lo que pasa al trabajar con funciones y objetos como parámetros por referencia.
// En este caso sabemos que cuando agregamos los tres puntos al argumento este sería un parámetro rest.
// para romper la referencia debemos hacerlo de la misma manera que hicimos más arriba, envolvemos con llaves.
const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

// Con arreglos

let frutas = ['Manzana', 'Pera', 'Uva'];
// En vez de referenciar el arreglo así -> let otrasFrtas = frutas.
// Lo envolvemos entre corchetes para definir que es un nuevo arreglo y usamos el spread operator.
let otrasFrutas = [...frutas]; 
otrasFrutas.push('Manga');
console.table({frutas, otrasFrutas});

// Maneras de comprobar velocidades de ejecuciones con console.time().
// Y otra manera de romper el parámetro por referencia es haciendo unso del método .slice
console.time('slice')
// Slice es un método que devuelve los elementos, pero si no especificamos pues nos devuelve 
// el array con todos los elementos.
const otrasfrutas2 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas3 = [...frutas];
console.timeEnd('spread');
