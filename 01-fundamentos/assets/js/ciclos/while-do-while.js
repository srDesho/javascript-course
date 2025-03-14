const carros = ['Ford', 'Mazda', 'Toyota', 'Suzuki'];
let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++; // Si no incrementamos nuestra variable, se ejecutará un ciclo infinito y consumirá toda la ram
    // Para detener el ciclo infinito en nuestro navegador debemos abrir el administrador de tareas(del navegador)
    // ir a more tools -> task manager. Y debemos finalizar la tarea que está consumiendo mucha ram.
}

// Ejemplo de un ciclo infinito
// while (carros[i]) {
//     if (i === 1) {
//         continue;
//     }
//     console.log(carros[i]);
//     i++;
// }

// Do while, la única diferencia con el while, esque el doWhile va a ejecutar el bloque inter al menor una vez.
console.warn('DO WHILE');

let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (j < carros.length);