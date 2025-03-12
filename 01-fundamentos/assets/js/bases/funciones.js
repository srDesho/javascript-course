// Una función nos sirve para la reutilización de métodos y procedimientos.
// La diferencia entre funciones y metodos/procedimientos es que la función es el bloque del código
// el cuál tiene métodos y procedimientos y la función puede ser llamada en cualquier parte del 
// código dependiendo sus modificadores de acceso(público, privado, protegido).
// Los métodos y procedimientos son los que están dentro de las funciones, clases, u objetos.

// Definir funciones
// 1ra manera que no es muy recomendable ya que puede dar error cuando creamos variables de tipo var 
// con el nismo nombre de la función:
function saludar() {
    console.log('Hello Friend');
}

// 2da manera, función anónina.
// De esta manera no hay forma de que el nombre de la función pueda ser reutilizado en la aplicación.
const saludar2 = function() {
    console.log('Hello Friend');
}

// Función con argumentos.
const saludoCristian = function(nombre) {
    // Esto es para mostrar todos los argumentos que no fueron recibidos entre los paréntesis de la función.
    console.log(arguments);
    console.log('Hola ' + nombre);
}

// 3ra manera, con función Lambda
const saludarFlecha = () => {
    console.log("Hola flecha");
}

// Función lambda con args
const saludarFlechaArgs = ( nombre ) => {
    console.log("Hola " + nombre);
}

// Llamado de una función.
// saludar();
// saludar2();
// saludoCristian('Cristian');
// saludoCristian('Cristian', 26, false, 'Bolivia');
// saludarFlecha();
// saludarFlechaArgs('Desho');


// Retorno de funciones.
function sumar(a,b) {
    return a + b;
}

// Con lambda function
// const sumarLambda = (a, b) => {return a + b}
// Podemos resumir la función lambda cuando tenemos una sola línea de código de la siguiente manera.
const sumarLambda = (a, b) => 1 + 7;

// Número aleatorio
// function getAleatorio() {
//     return Math.random();
// }

// función nro aleatorio lambda resumido.
const getAleatorio = () => Math.random();

console.log(sumar(1,2));
console.log(sumarLambda(1,2));
console.log(getAleatorio());
