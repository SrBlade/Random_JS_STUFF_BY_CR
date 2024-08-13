/*CREACION DE STRINGS

En javaScript, existen varias formas de crear strings. Estas dependeran tanto de tus gustos personales, como del contexto.
Hay 3 principales concretamente, estas son:

*/
const comillasNormales = 'comillas normales'
const comillasDobles = "doble comillas"
const comillasInvertidas = `comillas invertidas`

//NOTA: Aunque tanto comillas dobles y simples hacen lo mismo, es buena practica solo utilizar una de estas durante nuestro proyecto, y no ir intercalando.

//CONCATENAR STRINGS (UNIRLOS)

/*
Al igual que en otros lenguajes de programacion, podemos concatenar strings con los operadores + (suma) y usando comillas invertidas llamando
al simbolo ${nombre_de_variable}. Personalmente prefiero el de ${} pero ambos metodos son utiles.

*/

//EJEMPLO

let nombre = 'Calvin'
let apellido = 'Bobadilla'

let nombre_completo = "Mi nombre completo es: " + nombre + ' ' + apellido

console.log(nombre_completo)

/*EXPLICACION: Creamos 2 variables, en este caso 'nombre' y 'apellido' para colocar nuestros datos respectivamente. Luego creamos una 3era variable 'nombre completo'
en donde con el operador de asignacion = le indicamos su respectivo string, mas la suma de las variables nombre y apellido.

*/
/* USANDO COMILLAS INVERTIDAS:
*/

let gato = 'Minino'
let texto = 'Mi gato se llama'
let datazo = ", y es de color naranja"

const Todo_el_texto = (`Hola, ${texto} ${gato} ${datazo}`)

console.log(Todo_el_texto)

/* Explicacion:

Hacemos los mismos pasos del metodo anterior. Lo que cambia es que en vez usar el operador +, usando comillas invertidas llamamos con el simbolo ${variable}
 a nuestras respectivas variables, para ya al final llamarlo con el console.log(todo_el_texto)
 */

//NOTA: Tiene que ser con ` obligatoriamente

/* CON ARRAYS
Otra forma, es usando arrays. En donde creamos nuestras variables, y tras crearla creamos otra variable con nuestro respectivo array, que en este caso son 
las variables anteriores. Tras ello, con un console.log, le indicamos que imprima la variable pero que le una ' ' para separarlas respectivamente.
*/

var texto1 = 'Me encanta'
var texto2 = 'el juego'
var texto3 = 'Minecraft'

const pensamiento = [texto1, texto2, texto3]
console.log(pensamiento.join(' '))

//NOTA: hay que ponerle el .join para que funcione.

//CON CONCAT

/* 
Al usar concat, le decimos directamente a JS que concatene lo siguiente. Hace lo mismo que los metodos anteriores, pero aqui llamamos directamente a este
metodo.
*/
//EJEMPLO:


const hobbie1 = 'Programar'
const hobbie2 = 'Jugar'
const hobbie3 = 'Ser Fitness'

const hobbies = 'Mis hobbies son: '.concat(hobbie1, ' ', hobbie2, ' ', hobbie3, ' ')
console.log(hobbies)




//Algo que no me esperaba pero hare, es un poema con el que se puede hacer algo chulo en javascript
//  1 persona muere, 2 personas nacen
// 2 personas nacen, miles de personas crecen
// cada dia, cada pase, el mundo, se expande
// una y otra vez, el ciclo, compase

const poema = '1 persona muere, 2 personas nacen,\n' + 
            '2 personas nacen, miles de personas crecen,\n' +
            'cada dia, cada pase, el mundo, se expande,\n' +
            'una y otra vez, el ciclo, compase,\n' 

console.log(poema)

//con ` es mas facil

/*



BOOLEANS: Verdadero o falso damas y caballeros. Este tipo de dato nos ayuda a definir si algo es verdadero o si es falso.

let mayorEdad = true

NULL: No hay, no existe. Esa es la frase con la que lo resumiria. Con null decimos que ese dato, esta vacio.

let noExiste = null


Nota: Usualmente no es necesario colocarlo el undefined, debido a que JS por si solo nos lo da, si un dato no esta definido.

SYMBOL: El tipo de dato symbol o simbolo, es un tipo de dato que nos permite darle un identificador unico a algo en especifico. Veelo como si fuera un ID, este es unico.
Ejemplo:

let idUser = Symbol(123456)

BIGINT: Ultimo dato primitivo, este a diferencia de number es para guardar numeros extremadamente grandes, como por ejemplo el que dijo Estefany, el numero PI.

let bigNumber = 5n

TIPOS DE DATOS COMPLEJOS

Estos tipos de datos son complejos debido a estan compuestos de otros tipos de datos existentes. Entre ellos se encuentran:

Objects: Es un concepto complejo (por algo es un tipo de dato complejo) mas adelante en el curso se daran mas detalles, y hay bastante cursos de programacion orientada a objetos en platzi

Ejemplo:

const smartPhone = {
    brand: 'Samsung';
    model: 'Galaxy S24';
    color: 'Titanium purple';
    storage: '256GB'
}

ARRAYS: Son listas, en esta al igual que en una lista de compras, podemos guardar distintos datos que utilizaremos mas adelante. Ademas de poder manipular estos mismos.

Ejemplo:

let carritoDeCompras = ['Carne', 'Arroz', 'Habichuelas', 'Lechuga', 'ketchup'] etc.....

FUNCTIONS: Son pedazitos de codigo reutilizables en donde podemos guardar valores e instrucciones a ejecutar mas adelante.

Ejemplo: 

function saludo (name) {
name: 'Jose'
console.log(`Buenos dias ${name})
} 

saludo() //devuelve: Buenos dias Jose
*/

/*CREACION DE STRINGS

En javaScript, existen varias formas de crear strings. Estas dependeran tanto de tus gustos personales, como del contexto.
Hay 3 principales concretamente, estas son:

*/
const comillasNormales = 'comillas normales'
const comillasDobles = "doble comillas"
const comillasInvertidas = `comillas invertidas`

//NOTA: Aunque tanto comillas dobles y simples hacen lo mismo, es buena practica solo utilizar una de estas durante nuestro proyecto, y no ir intercalando.

//CONCATENAR STRINGS (UNIRLOS)

/*
Al igual que en otros lenguajes de programacion, podemos concatenar strings con los operadores + (suma) y usando comillas invertidas llamando
al simbolo ${nombre_de_variable}. Personalmente prefiero el de ${} pero ambos metodos son utiles.

*/

//EJEMPLO

let nombre = 'Calvin'
let apellido = 'Bobadilla'

let nombre_completo = "Mi nombre completo es: " + nombre + ' ' + apellido

console.log(nombre_completo)

/*EXPLICACION: Creamos 2 variables, en este caso 'nombre' y 'apellido' para colocar nuestros datos respectivamente. Luego creamos una 3era variable 'nombre completo'
en donde con el operador de asignacion = le indicamos su respectivo string, mas la suma de las variables nombre y apellido.

*/
/* USANDO COMILLAS INVERTIDAS:
*/

let gato = 'Minino'
let texto = 'Mi gato se llama'
let datazo = ", y es de color naranja"

const Todo_el_texto = (`Hola, ${texto} ${gato} ${datazo}`)

console.log(Todo_el_texto)

/* Explicacion:

Hacemos los mismos pasos del metodo anterior. Lo que cambia es que en vez usar el operador +, usando comillas invertidas llamamos con el simbolo ${variable}
 a nuestras respectivas variables, para ya al final llamarlo con el console.log(todo_el_texto)
 */

//NOTA: Tiene que ser con ` obligatoriamente

/* CON ARRAYS
Otra forma, es usando arrays. En donde creamos nuestras variables, y tras crearla creamos otra variable con nuestro respectivo array, que en este caso son 
las variables anteriores. Tras ello, con un console.log, le indicamos que imprima la variable pero que le una ' ' para separarlas respectivamente.
*/

var texto1 = 'Me encanta'
var texto2 = 'el juego'
var texto3 = 'Minecraft'

const pensamiento = [texto1, texto2, texto3]
console.log(pensamiento.join(' '))

//NOTA: hay que ponerle el .join para que funcione.

//CON CONCAT

/* 
Al usar concat, le decimos directamente a JS que concatene lo siguiente. Hace lo mismo que los metodos anteriores, pero aqui llamamos directamente a este
metodo.
*/
//EJEMPLO:


const hobbie1 = 'Programar'
const hobbie2 = 'Jugar'
const hobbie3 = 'Ser Fitness'

const hobbies = 'Mis hobbies son: '.concat(hobbie1, ' ', hobbie2, ' ', hobbie3, ' ')
console.log(hobbies)




//Algo que no me esperaba pero hare, es un poema con el que se puede hacer algo chulo en javascript
//  1 persona muere, 2 personas nacen
// 2 personas nacen, miles de personas crecen
// cada dia, cada pase, el mundo, se expande
// una y otra vez, el ciclo, compase

const poema = '1 persona muere, 2 personas nacen,\n' + 
            '2 personas nacen, miles de personas crecen,\n' +
            'cada dia, cada pase, el mundo, se expande,\n' +
            'una y otra vez, el ciclo, compase,\n' 

console.log(poema)

//con ` es mas facil

/*



BOOLEANS: Verdadero o falso damas y caballeros. Este tipo de dato nos ayuda a definir si algo es verdadero o si es falso.

let mayorEdad = true

NULL: No hay, no existe. Esa es la frase con la que lo resumiria. Con null decimos que ese dato, esta vacio.

let noExiste = null


Nota: Usualmente no es necesario colocarlo el undefined, debido a que JS por si solo nos lo da, si un dato no esta definido.

SYMBOL: El tipo de dato symbol o simbolo, es un tipo de dato que nos permite darle un identificador unico a algo en especifico. Veelo como si fuera un ID, este es unico.
Ejemplo:

let idUser = Symbol(123456)

BIGINT: Ultimo dato primitivo, este a diferencia de number es para guardar numeros extremadamente grandes, como por ejemplo el que dijo Estefany, el numero PI.

let bigNumber = 5n

TIPOS DE DATOS COMPLEJOS

Estos tipos de datos son complejos debido a estan compuestos de otros tipos de datos existentes. Entre ellos se encuentran:

Objects: Es un concepto complejo (por algo es un tipo de dato complejo) mas adelante en el curso se daran mas detalles, y hay bastante cursos de programacion orientada a objetos en platzi

Ejemplo:

const smartPhone = {
    brand: 'Samsung';
    model: 'Galaxy S24';
    color: 'Titanium purple';
    storage: '256GB'
}

ARRAYS: Son listas, en esta al igual que en una lista de compras, podemos guardar distintos datos que utilizaremos mas adelante. Ademas de poder manipular estos mismos.

Ejemplo:

let carritoDeCompras = ['Carne', 'Arroz', 'Habichuelas', 'Lechuga', 'ketchup'] etc.....

FUNCTIONS: Son pedazitos de codigo reutilizables en donde podemos guardar valores e instrucciones a ejecutar mas adelante.

Ejemplo: 

function saludo (name) {
name: 'Jose'
console.log(`Buenos dias ${name})
} 

saludo() //devuelve: Buenos dias Jose
*/
