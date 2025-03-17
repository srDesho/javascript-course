function add(x, y = 0) {
    return x + y;
}

// console.log(add(10, 20));
// console.log((1, 20));

const greeting = (name) => `hola amigo ${name}`;

// console.log(greeting('Freddy Thorne'));


// MANIPULANDO EL DOM
const title = document.createElement('h1');
title.innerText = 'Hello friend.';

// Creando un botón
const button = document.createElement('button');
button.innerText = 'Click';

// EventHandlers(Manipución de eventos)
button.addEventListener('click', function () {
    title.innerText = 'Cambiando el texto h1 desde un evento';
    alert('Se realizó un click');
})

document.body.append(title);
document.body.append(button);

// Manipulado objeto con el dom
const user = {
    name: 'Joe',
    age: 26,
}

function printInfo(user) {
    const {name, age} = user;

    // Creamos una etiqueta h1 para que sea manipulado por el dom
    console.log(name, age);
    return `<h1>Hola ${name}, tienes edad de: ${age}</h1>`;
}

printInfo(user);
document.body.innerHTML = (printInfo(user));

// FUNCIONES ANÓNIMAS
console.log(function(){
    return 'S4m Sepi0l';
}());

// Las funciones anónimas se usan más a la hora de manipular el DOM, ejemplo en los eventListener
const buttonClickMe = document.createElement('button');
buttonClickMe.innerText = 'Click me';

buttonClickMe.addEventListener('click', function() {
    alert('Clicked');
})

document.body.append(buttonClickMe);

// ARRAY FUNCTIONS
const add2 = (a, b = 0) => a + b;

console.log(add2(2,5));

// Hacemos el mismo ejemplo de el botón anterior pero con array function
const buttonClikme2 = document.createElement('button');
buttonClikme2.innerText = 'Click me 2';

buttonClikme2.addEventListener('click', () => alert('clicked 2'));
document.body.append(buttonClikme2);

// Cuando usamos las arrow functions con retorno de una sola línea, 
// este nos da problema a la hora de querer retornar un objeto, 
// revisar el siguiente código:

const showObject1 = () => {name: 'Cristian'};

// console.log(showObject1()); // Verán que nos muestra undefined u otra cosa, dependiendo del entorno.

// Para poder ver el objeto debemos envolverlo entre paréntesis.
const showObject2 = () => ({name: 'Elliot'});
// console.log(showObject2());

// STRING LITERALS
// Se le llama así a la concantenación con los backticks.

const background = 'yellow';
const color = 'white';
const isAuthorized = true;

const button2 = document.createElement("button");
button2.innerText = 'click me';
// Agregando styles
button2.style = 'background: ; color: white;'
// Aquí es donde hacemos uso de los backticks
button2.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`;

button2.addEventListener('click', () => {
    if (isAuthorized) {
        return alert('Is authorized.');
    }

    alert('Is not authorized.')
});

document.body.append(button2);


// MÉTODOS ARRAYS, concat, map, foreach, filter

const names = ['Cristian', 'Daniel', 'Messi'];

// El forEach simplemente nos recorre el arreglo pero no nos devuelve nada.
names.forEach(function(name) {
    console.log(name);
});

// .map a diferencia del forEach este crea un nuevo array y nos devuelve los elementos 
// los cuales podemos almacenarlo en variables o constantes.
const newNames = names.map(function(name) {
    // Podemos manipular cada elemento.
    return `Hola ${name}`;
});

// console.log(names); // Vemos que el map no modifica el array original.
// console.log(newNames);

// .find sirve para buscar un elemento.
const nameFound = names.find(function(name) {
    if (name === 'Messi') {
        return name;
    }
});

// console.log('Nombre encontrado con .find: ' + nameFound);

// .filter nos devuelve un nuevo arreglo con los elemento filtrados, o sea filtra y separa en un nuevo arreglo.
const namesFilter = names.filter(function(name) {
    if (name != 'Messi') {
        return name;
    }
});

// console.log(names);
// console.log(namesFilter); // Sólo nos devuelve Cristian y Daniel, porque son distintos a Messi.

// Unir 2 arreglos con .concat

const animals = ['Loro', 'Gato', 'Perro'];
const animals2 = ['Lobo', 'Pato', 'Zorro'];

// console.log(animals);
// console.log(animals2);
// console.log(animals.concat(animals2));

// SPREA OPERATOR
// Nos sirve para crear un nuevo arreglo u objeto y tener sus mismos atributos o elementos.
// Por ejemplo vamos a unir los arreglos de animales con el spread operator(Operador diferencial).

const animalsUnited = [...animals, ...animals2];
console.log(animalsUnited);

// spread operator en Objetos
const user2 = {
    name: 'Cristian',
    lastname: 'López',
}

const address = {
    street: 'Main street 123',
    city: 'Sinaloa',
}

const userInfo = {
    ...user2,
    ...address,
}

console.log('Spread operator uniendo 2 objetos: ', {userInfo});

// ECMASCRIPT MODULES
// Formas de dividir una aplicación en múltiples archivos.

export function add3(x = 0, y = 0) {
    return x + y;
}

export function multiply(x, y) {
    return x * y;
}

// También podemos exportar variables
export const title2 = 'Js for React.';
export const active = true;
export const points = [10, 21, 40]

export default add3;

// Optional Chaining
// Cuando recibimos valores desde el backend por ejemplo, y queremos acceder a una propiedad
// de algún elemento que no existe de algún objeto este no podrá acceder porque no existe y nos
// devolverá un error o un undefined si lo validamos con if.
const person = {
    name: 'José',
    address: {
        city: 'London',
    },
}

// Validamos con If para preguntar si existe o no para luego mostrarlo.
// if (person.location) {
//     console.log(person.location.city);
// }

// Para no estar validando con un if, podemos hacer uso del optional chaining que este nos sirve 
// para validar como el if anterior, si no existe la propiedad devuelve undefined.

// Simplemente colocamos el signo ? donde no estamos seguro si existe tal propiedad.
console.log(person.location?.city);

// ASYNC AWAIT
// fetch() es una biblioteca que nos permite acceder a direcciones de internet.
// Esta página es de ejemplo, y nos devuelve posts en formato json
let data = fetch('https://jsonplaceholder.typicode.com/posts');

// Nos devuelve una PROMISE
// Una promesa es un objeto que representa un valor futuro.
// Maneja la eventual finalización o fallo de operaciones asíncronas.
// Su propósito principal es mejorar el manejo del código asíncrono y evitar el anidamiento excesivo 
// de callbacks (conocido como "callback hell")
console.log(data); 

// Variables para crear lista en nuestro HTML
const ul = document.createElement('ul');

// Para finalizar una ejecución del fecth hacemos uso del método .then
// Aquí lo que hacemos es que nos va a conectar con la api
/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        // Esta ejecución sólo se hará cuando el servidor responda la solicitud.
        // Con esto convertimos la respusta del servidor a un objeto json que nosotros podemos leer.
        return response.json();

        // Ahora supongamos que la conversión a .json va a tomar mucho tiempo pues lo siguiente que
        // queramos ejecutar podemos ponerlo en otro then, ya que todo lo que está aquí trabaja en
        // sincronía.
        // console.log(response);
    }).then(function (dataa){ // Aquí es donde volvemos a crear otra ejeción y se hace en asincronía.
        console.log(dataa);
        // como esto me devuelve un arreglo podemos recorrerlo con foreach o map, etc
        dataa.forEach(function(post) {
            const li = document.createElement('li');
            li.innerText = post.title; // Se obtiene el texto del título para cada li.
            ul.append(li); // Agregamos el li al ul.
        });
        document.body.append(ul); // Agregamos el ul al body.
    }); */

// ASYNC y AWAIT
// estos objetos mejoran la sintaxis anterior con la que hemos trabajado con fetch sólo.
// Aquí en lugar de trabajar con then, lo etiquetamos con await para indicar que se trabaja 
// con asincronía.

// Para que await funcione todo el código debe estar dentro de una función marcada con async

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // Lo mismo si queremos hacer otra asincronía en vez de usar .then usamos await
    const dataa = await response.json();
    console.log(dataa);
    // Ahora podemos recorrerlo de la misma manera que en el anterior
    dataa.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}
loadData();

// Mientras se está ejecutando la lógica con la api se ejecuta todo el código  frontend demás 
// en el navegador, así que este se mostrará primero y luego terminará la ejecución del fetch.
console.log('Fila 2');










