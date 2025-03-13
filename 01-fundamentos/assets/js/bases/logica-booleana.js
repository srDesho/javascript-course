// Veremos qué expresiones y lógica se pueden hacer con los booleanos.
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación.')
console.log(true); // True
console.log(!true); // false
console.log(!false); // True

console.log(!regresaFalse()); // True

console.log('===========');
// AND, cada condición debe ser true de lo contrario falso.
// Regresa false porque basta con que la primera condición sea false y no ejecuta lo que sigue.
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false, se muestran ambos log porque la primera se cumple y se evalua la sgte.

// También podemos hacer expresiones direntamente
console.log('===== && =====');
regresaFalse() && regresaTrue();

// OR es lo contrario a AND, basta con que uno sea verdadero y retorna true.
console.warn('OR');
console.log(true || false);
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); // Muestra sólo el primer log porque no hace falta evaluar lo sgte.

// Asignaciones
console.warn('===== Asignaciones ====');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hello friend' && 150;
const a2 = 'Hello' && 'Friend' && soyFalso && true; // Si tenemos una condición así: 'Hello' && 'Friend' nos devuelve el último valor
// Lo más común hacer asignaciones en un OR
const a3 = soyFalso || 'Ya no soy falso.';
// Aquí en a4 devulve el últ. valor porque las primeras 3 condiciones no tienen valor.
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo.'; 
// Aquí en a5 no toma en cuenta las últimas 2 condiciens porque ya encontró un valor antes el cuál es la función.
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo.' || true; 

console.log({a1, a2, a3, a4, a5});

