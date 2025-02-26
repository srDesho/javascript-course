
// Para abrir una terminal con la ruta de nuestro proyecto vamos a la pestaña terminal -> new Terminal.

// console.log('Hello Wolrd');

// Qué es una variable?
// Es un contenedor de información que apunta a un lugar en memoria.
// Este puede cambiar su valor en un futuro.

// Formas de declarar variables
let a = 10; // let nos permite crear variables.
var b = 10; // el var ya no se debe usar para crear variables aunque aún es válidad 
// porque JS procura tener compatibilidad con todos los navegadores Webs.

const c = 10 // cons es para definir CONSTANTES.

// JavaScript tiene el nombre Java al comienzo por lo innovador y popular que era Java en ese timpo así que lo implementaron como marketing.
//Orígenes de JavaScript:

// JavaScript fue creado originalmente por Brendan Eich en Netscape Communications en 1995.
// Inicialmente, el lenguaje se llamaba "Mocha".
// Poco después, se renombró a "LiveScript".

// Versiones de JavaScript
// 1996: LiveScript a JavaScript (estándar)
// 1997: ES1 (ECMAScript 1)
// 2009: ES5 (ECMAScript 5) Con muchas carácterísticas nuevas.
// 2015: ES6/ES2015 (ECMAScript 2015) que fue la actualización más grande de js hasta el momento.
// 2015 se estableció el año de nuevos lanzamientos de js.
// 216/2017/2018/2019/2020/...

// ¿Qué versión debo usar?
// ES5: Soporta en todos los navegadores Web.
// ES6/2015, ES7/2016, ES8/2017:
    // Son soportados por navegadores web modernos, pero no por todos los navegadores Web.

// Muchas características pueden ser implementadas por polyfills.

// ¿Qué es un polyfill?
// Es un código que provee el funcionamiento de una nueva característica de JsvaScript(ES6), en versiones viejas como ES5.
// O sea me permite utilizar carácterísticas modernas en una versión vieja de JS como el ES5.

// Otras formas de crear variables.

let d = 10, 
    e = 10,
    f = 'Hello ',
    g = 'friend',
    x = d + e;

// En la mayoría de los lenguajes las constantes siempre escritas en mayúsculas, en js puede ser distinto, mayormente se ponen 
// en mayúsculas las variables que son globales, en este caso será sólo para este archivo de ejemplo entonces lo ponemos en minúscula.
const saludo = f + g;

console.log( x );

// Trabajando más con la Terminal
// Mensajes de consola.
console.log(x);
console.warn(x);
console.error(x);
console.info(x);

// Mostrando los nombres de nuestras variables:
console.log('d', d);
console.log('e', e);
console.log('f', f);
console.log('x', x);

// Poniendo colores y estilos a nuestros mensajes en consola  con css
console.log('%c Mis variables', 'color:blue; font-weight: bold')

// Otra forma de mostrar los nombres de las variables es enmarcando con llaves {}
console.log({ d });
console.log({ e });
console.log({ f });
console.log({ x });

// Cuando necesitamos imprimir muchas variables podemos hacer uso de un table.
console.table({d,e,f,g}); // Las llaves nos dicen que es un objeto y los corchetes [] son para arreglos
