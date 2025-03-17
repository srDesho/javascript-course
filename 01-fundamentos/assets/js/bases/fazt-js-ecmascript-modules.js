// Aquí importamos las funciones que creamos en el archivo de fazt-js.js
// Pero para que esto funciones debemos poner un type="module" en nuestro archivo index.html
// import { add3, multiply, active, points, title2 } from "./fazt-js.js";

/* console.log(add3(1, 2));
console.log(multiply(5, 5));
console.log(title2);
console.log(active);
console.log(points); */

// Podemos también dar un nombre y recibir el método que está definido con default
// addModule o cualquier nombre que queramos poner.
import addModule from "./fazt-js.js"

console.log(addModule());


