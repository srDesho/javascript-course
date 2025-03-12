// Vamos a crear una función que nos retornará un objeto
function crearPersona(nombre, apellido) {
    return {
        nombre, // es resumén de esto nombre: nombre
        apellido // es resumén de esto apellido: apellido, js entiende que vamos a devolver el objeto literal
    }
}

// Lo hacemos con una fución lambda
// Pero cuando queremos devolcer un objeto lo debemos poner entre paréntesis.
const personaDesho = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Cristian', 'Montaño');
console.log(persona);
console.log(personaDesho('Desho', 'Montaño'));

// Ahora vamos a ver la versión donde capturamos todos los argumentos en una función lambda.
// De la manera tradicional se usa la palabra reservada arguments.
function imprimirArgumentos1() {
    console.log(arguments);
}

// En lambda se hace de la siguiente manera:
// Los 3 puntos es llamado parámetro Rest y este me captura todo los argumentos en un array.
// Después del parámetro rest no puede ir ningún otro argumento.
// Pero sí pueden ir argumentos antes, ejemplo con la edad.
const imprimirArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args; // Esto me va a entregar todos los argumentos menos edad porque eso se vuleve aparte.
}

// const argumentos = imprimirArgumentos2(10, true, false, 'Desho', 'Hola');
// console.log(argumentos);

// Pero si queremos obtener cada uno de los argumentos, podemos hacerlo de la siguiente manera.
const [casado, vivo, nombre, saludo] = imprimirArgumentos2(10, true, false, 'Desho', 'Hola');
console.log({casado, vivo, nombre, saludo});

// También podemos cambiar el nombre a nuestra constante cuando capturamos los argumentos, 
// para eso debemos agregar entre llaves.
const {apellido: nuevoApellido} = crearPersona('Cristian', 'Laime');
console.log({nuevoApellido});

// Desestructuración

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Si queremos mostras todos los elementos de tony, una manera mala podría decirse es de la siguiente manera.
// No se puede ver bien ordenado a la hora de imprimirlos
// const imprimePropiedades = (personaje) => {
//     console.log('nombre ', personaje.nombre);
//     console.log('codeName ', personaje.codeName);
//     console.log('vivo ', personaje.vivo);
//     console.log('edad ', personaje.edad);
//     console.log('trajes ', personaje.trajes);   
// }

// Para esto existe la desestructuración:
// Ponemos entre llaver cada uno de los argumentos.
// edad = 15 -> esto es para asignar un valor por defecto por si no se envía algún parámetro.
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});   
}

console.log(imprimePropiedades(tony));