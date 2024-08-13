//TYPE CASTING

//Al igual que en otros lenguajes como python, podemos convertir algunos tipos de datos, a otros tipos de datos y viceversa, se puede hacer con el siguiente
//EJEMPLO

const stringToNumber = '32'
const integer = parseInt(stringToNumber)

console.log(stringToNumber)
console.log(typeof integer)
//nos devuelve 32 y number.

//Creamos la variable, y en una variable nueva le indicamos que esa variable la convierta a un numero con parseInt. El que nos devuelve dependera del tipo de dato
//no es lo mismo pedirselo a un string con numeros, que a un boolean.

//Ademas podemos tambien hacer eso mismo con decimales, pero en vez de parse int se usa parsefloat como el siguiente ejemplo:

var text = '3.14'
var decimal = parseFloat(text)

console.log(text)
console.log(typeof decimal)
//Nos devuelve 3.14 y number.


//Tambien con parseFloat(variable, cantidadDeNumeros) podemos indicarle cuantos numeros queremos que nos devuelve, si los 2 primeros, 3 primeros etc.
//EJEMPLO
const binary = '11010'
const converter = parseFloat(binary)

console.log(converter)
console.log(typeof converter)

//ahora, hagamos un MEGA EJEMPLO, concatenaremos strings, numbers, booleans cada uno entre si y viceversa:
//Veremos que sucede cuando concatenmos distintos tipos de datos.
const estring = '8'
const number = 10
const boolean = true

console.log(estring + estring) //concatena, nos da 88
console.log(estring + number)// concatena, nos da 810
console.log(estring + boolean)// concatena, nos da 8true
console.log(number + estring)//concatena, nos da 108
console.log(number + number)//suma, nos da 20
console.log(number + boolean)//suma, nos da 11
console.log(boolean + estring)//concatena, nos da true8
console.log(boolean + number)//suma, nos da 11
console.log(boolean + boolean)//suma, nos da 2

console.log(estring + boolean + number) //Nos devuelve: 8true10

const prueba1 = 'holaaa'
const prueba2 = parseFloat(prueba1)
console.log(prueba2)
console.log(typeof prueba2)


function saludo (name) {
    name = 'Jose'
    console.log(`Buenos dias ${name}`)
}

saludo()

function saludo(name) {
    console.log(`Buenos días, ${name}`);
}

saludo('Jose'); // Devuelve: Buenos días, Jose
//TYPE CASTING

//Al igual que en otros lenguajes como python, podemos convertir algunos tipos de datos, a otros tipos de datos y viceversa, se puede hacer con el siguiente
//EJEMPLO

const stringToNumber = '32'
const integer = parseInt(stringToNumber)

console.log(stringToNumber)
console.log(typeof integer)
//nos devuelve 32 y number.

//Creamos la variable, y en una variable nueva le indicamos que esa variable la convierta a un numero con parseInt. El que nos devuelve dependera del tipo de dato
//no es lo mismo pedirselo a un string con numeros, que a un boolean.

//Ademas podemos tambien hacer eso mismo con decimales, pero en vez de parse int se usa parsefloat como el siguiente ejemplo:

var text = '3.14'
var decimal = parseFloat(text)

console.log(text)
console.log(typeof decimal)
//Nos devuelve 3.14 y number.


//Tambien con parseFloat(variable, cantidadDeNumeros) podemos indicarle cuantos numeros queremos que nos devuelve, si los 2 primeros, 3 primeros etc.
//EJEMPLO
const binary = '11010'
const converter = parseFloat(binary)

console.log(converter)
console.log(typeof converter)

//ahora, hagamos un MEGA EJEMPLO, concatenaremos strings, numbers, booleans cada uno entre si y viceversa:
//Veremos que sucede cuando concatenmos distintos tipos de datos.
const estring = '8'
const number = 10
const boolean = true

console.log(estring + estring) //concatena, nos da 88
console.log(estring + number)// concatena, nos da 810
console.log(estring + boolean)// concatena, nos da 8true
console.log(number + estring)//concatena, nos da 108
console.log(number + number)//suma, nos da 20
console.log(number + boolean)//suma, nos da 11
console.log(boolean + estring)//concatena, nos da true8
console.log(boolean + number)//suma, nos da 11
console.log(boolean + boolean)//suma, nos da 2

console.log(estring + boolean + number) //Nos devuelve: 8true10

const prueba1 = 'holaaa'
const prueba2 = parseFloat(prueba1)
console.log(prueba2)
console.log(typeof prueba2)


function saludo (name) {
    name = 'Jose'
    console.log(`Buenos dias ${name}`)
}

saludo()

function saludo(name) {
    console.log(`Buenos días, ${name}`);
}

saludo('Jose'); // Devuelve: Buenos días, Jose