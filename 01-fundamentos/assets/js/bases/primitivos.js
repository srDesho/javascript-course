// Los Tipos de datos son los que describen el tipo de valor que tendrá una variable o constante.
// Tipos de datos primitivos es una información que no es un objetos y son inmutables.
// Hay 6 tipos de datos primitivos en javaScript: Boolean, Null, Undefined, String, Number, Symbol.

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

// Otras maneras de crear String
nombre = "Tía May";
nombre = `Tía May`;

// Para saber el tipo de dato de nuestra variable hacemos uso del método typeof
console.log(typeof nombre);

// Cambiamos la variable nombre a tipo de dato number
nombre = 123;
console.log(typeof nombre);

// tipo boolean
let esMarvel = false;
console.log(typeof esMarvel);

// tipo number
let edad = 33;
console.log(typeof edad);

edad = 33.001 // Mira que js no le importa si hay decimales, flotantes, doubles, este toma todo como number.
console.log(typeof edad);

// tipo undefined
let superPoder;
console.log(typeof superPoder);

// tipo null
let soyNull = null;
console.log(typeof soyNull);

// tipo Symbol: El principal uso de un symbol es identificar propiedades de manera única.
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);