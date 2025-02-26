// Características viejas de JS, alert, prompt, y confirm

// alert("Hola bro"); // Muestra un mensaje en una ventana emergente.

// let nombre = prompt('¿Cuál es su nombre?'); // Pide al usuario que ingrese un nombre y lo almacena en la variable 'nombre'.
// console.log(nombre); // Imprime el nombre ingresado por el usuario en la consola.
// console.log('**** ' + nombre + ' ****'); // Imprime el nombre rodeado de asteriscos en la consola.

// const seleccion = confirm('¿Está seguro de borrar esto?') // Pide confirmación al usuario (Sí/No) y almacena la respuesta (true/false) en 'seleccion'.
// console.log(seleccion); // Imprime la respuesta de confirmación en la consola.

// Cuando trabajamos con node estas alerts, prompts y confirms no funcionan.

/* Node.js:

global: Objeto global con funciones del servidor (process, require, etc.).
Muestra contenido al usar console.log(global).
Navegadores:

window: Objeto global (no global).
global es undefined.
Variables globales con var se añaden a window.
Diferencia:

Entornos distintos: Node.js (servidor) vs. navegadores (web).
Cada uno tiene su objeto global. */
console.log( global );