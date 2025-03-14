
const heroes = ['Batman', 'Wonder Woman', 'Superman', 'Aquaman', 'Flash'];

// for Tradicional
console.warn('For tradicional');

for( let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// forin
// Aquí el in nos hace el trabajo de inicializar nuestra variable en 0 y 
// nos la incrementa de 1 en 1 hasta que no haya mas valores
// Con for in se trabaja más en objetos para iterar sobre las llaves(propiedades)
console.warn('For in');
for( let i in heroes ) {
    console.log(heroes[i]);
}

// for of
// Se trabaja más con arreglos.
console.warn('For of');
for(let heroe of heroes) {
    console.log(heroe);
}