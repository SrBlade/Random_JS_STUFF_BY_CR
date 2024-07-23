//vamos a hacer el primer try solo con el ejemplo que vi de como usar this

//fue al 5to try y tras verlo 2 veces xdd

//salute esta definida como un metodo aca. abajo vemos el ejemplo de enlace implicito (se hace dentro de la misma variable funcion)

const gato = {
    name: 'minino' ,
    salute: function ()  {
        console.log(`Este es un saludo para ${this.name}`)

    }
}

gato.salute()

//otro mas
//enlace explicito como vemos aqui abajo. la funcion es independiente y se hace el llamado a una variable externa de la misma.
function saludo () {
    console.log(`Este es otro saludo para mi gato ${this.felino}`)


}

const gatubelo = {
    felino: `Minino` ,
    address: `casa 23, calle 7 residencial bisono hato nuevo` ,
    owner: 'Calvin Bobadilla'
}
saludo.call(gatubelo)

//el this, es un identificador que nos permite acceder a datos de una variable externa, o dentro de la misma funcion.
//se usa this.(el nombre del objeto al que queremos acceder) se puede usar dentro de las funciones
//y para llamarlo se usa nombredelafuncion.call(nombredelavariable/otrafuncion


    

function newGreeting (owner, address) {
    
    console.log(`Hola! soy ${this.felino} y vivo en ${address} y mi dueno es: ${owner}`)
    

}
const owner = 'Calvin Bobadilla'
const address = 'casa 23, calle 7 residencial bisono hato nuevo'
    

newGreeting.call(gatubelo, owner, address)

//la otra forma y fue que se me olvido el malvao const y llamarla, me gualle en una entrevista.

let car = 'Tesla'
var model = 'Model S'
const color = 'Black'


/*
DIFERENCIAS

let: Tiene alcance de bloque, lo que significa que solo estan disponibles dentro del bloque {} donde se declara.


if (true) {
    let car = 'Tesla';
    console.log(car); // Nos devuelve Tesla
}
console.log(car); // Nos da error porque solo esta disponible dentro de la condicional.

No se pueden acceder a ellas antes de su declaracion. Por ejemplo:

console.log(car); // Da error
let car = 'Tesla';
console.log(c); // Nos devuelve Tesla

Y no se puede redeclarar:

let car = 'Tesla';
let car = 'Toyota'; // nos da error porque ya car esta declarado.

var: A diferencia de let, podemos usarlas antes de la declaracion, pero su valor sera undefined hasta que la misma se inicialize. Ejmmplo:

console.log(model); // undefined
var model = 'Model S';
console.log(model); // Nos devuelve: 'Model S'

Ademas, podemos declararla dentro de una condicional o funcion, y aun asi poder reutilizarla fuera de la misma. Ejemplo:

if (true) {
    var model = 'Model S';
}
console.log(model); // 'Model S'

Tambien, estas si se pueden redeclarar:
var model = 'Model S;
var model = 'Model X'; //no nos da error.

Por ultimo const: Al igual que let, no se pueden redeclarar, tienen alcance de bloque y son INMUTABLES:

const color = 'Black';
console.log(color); // Nos devuelve Black

color = 'red'; // Nos da el error TypeError: Assignment to constant variable.

if (true) {
    const color = 'Black';
    console.log(color); // Black
}
console.log(color); //  Nos da: ReferenceError: color is not defined.

Espero que les sea util!!
