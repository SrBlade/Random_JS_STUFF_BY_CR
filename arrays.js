//Que son los arrays\\

/*
Los arrays son objetos que contienen multiples datos ordenados, que comienzan desde el indice 0 (no desde el 1). Miralo como si fueran variables donde
podemos almacenar mas de 1 valor. Conjunto de elementos que se guardan en una variable


FORMAS DE CREAR ARRAYS:
*/
/*
const youtubers = new Array('Spreen', 'Rubius', 'MrBeast', 'SrBlade', 'PewdiPie', 'QuantumFracture', 'Midudev')

console.log(youtubers)

//otra forma:

const streamers = Array('xQc', 'Hikaru', 'Spreen', 'SrBlade', 'Rubius', 'Ibai', 'KunAguero')
console.log(streamers)

//o simplemente:

const celebrities = ['Chris evans', 'Tom holland', 'Rauw Alejandro', 'Billie Eilish', 'Robert Dw junior', 'Lionel Messi', 'Tame Impala']
console.log(celebrities)

//otros datos sobre arrays

/*
Podemos crear arrays vacios. Por ejemplo

const emptyArray = []  Estos son utiles si queremos iniciarlizar algo en especifico, y mas importante aun, si queremos que con el paso del tiempo a este mismo
se le vayan agregando cosas (tal vez por ejemplo una lista de personajes que se ira actualizando con el tiempo) al irle metiendo valores.


*/ 


/*

let bigArray = [youtubers, streamers, celebrities]

const superArray = bigArray

console.log(superArray)

//Tambien podemos guardar multiples tipos de datos primitivos

let multiplesDatos = [7, 'Textos', true, false, 12873102893710327 ]

//Mutability 
//Podemos agregar elementos a un array ya creando con .push

celebrities.push('Taylor Swift')

console.log(celebrities)


//Aunque se pueden modificar los arrays, tambien pueden ser inmutables y solo modificarlas en un elemento especifico. Example


let newYoutubers = youtubers.concat(['Quackity', 'Dream'])

console.log(youtubers)
console.log(newYoutubers)

//Concatenamos tanto dream como quackity a la nueva version del array, no al array original. Osea podemos crear clones y esos clones si actualizarlos
//no al original.

console.log(typeof youtubers)

//Cuando hacemos typeof a un array este nos dira que es un objeto, pero si queremos saber exactamente si es un array o no. Usamos:




const isArray = Array.isArray(celebrities)
console.log(isArray)


//console.log(celebrities.join(' ,') + youtubers.join(' ,') + streamers.join(' ,'))
let arrayNumbers = [1, 2, 4, 8, 16, 32, 64]
let total = 0

for (let i = 0; i < arrayNumbers.length; i++) {
    total += arrayNumbers[i]
    
}

console.log(total)

let countries = ['Dominican Republic', 'USA', 'Portugal', 'Spain', 'venezuela']

let otherCountries = countries.push('Mexico', 'Argentina', 'Peru', 'Colombia')

console.log(countries)
console.log(otherCountries)


let removeCountries = countries.pop('Colombia')
console.log(removeCountries) //Tengo que hacerle log al original para ver como se modifica, es mutable rememba.

console.log(countries) */

let numbers = [1, 2, 4, 8, 16]

let newNumbers = numbers.map(function (x) {return x * 2}) 

console.log(newNumbers)
console.log(numbers)

let squareNumbers = numbers.map(function (x) {
    return x * x 
})

console.log(squareNumbers)

let squareNumbersArrowFunction = numbers.map(x => x * x)

console.log(squareNumbersArrowFunction)

let numberForEach = numbers.forEach(numbers => console.log(numbers * numbers)  ) 

console.log(numberForEach)

let fahrenheit = [91, 84, 32, 50]

let celsius = fahrenheit.forEach(data => console.log(parseInt((  5 / 9 * data - 32))))

console.log(fahrenheit)
console.log(celsius)

//let userTemperature = parseInt(prompt('cual es la temperatura en fahrenheit?'))

//let convertedTemparature = userTemperature + 5/9 - 32

let celsiusMap = fahrenheit.map( x => 5 / 9 * x - 32)

console.log(celsiusMap)

let Array = [20, 32, 50, 8, 10]

//la forma correcta era con foreach y creando un arrow function y una variable que guarde la suma

let sum = 0

Array.forEach(number => {
    sum += number
})
console.log(Array)
console.log(sum)

//Filter es para como su nombre lo dice, filtrar los elementos de una lista. Puede ser por tipo, posicion etc
//xample:

let randomArray = [1, 2 , 3 , 4 , 5 , 6]

let justEvenNumbers = randomArray.filter(number => number % 2 === 0)

console.log(justEvenNumbers)

let randomList = ['72KG', 72, 'Probando', 2124, 'asdasdad']

let justNumbers = randomList.filter(data => typeof(data) === 'number' && console.log(data))

console.log(justNumbers)


/*
Number reduce tiene una funcion que recibe 2 paramentros, accumulattor y current value, el accumalator es como si tuvieras una variable externa inicializada
en 0, por asi decirlo ya nos la crea por nosotros, y el current value es la representacion de todos los valores que tenemos en nuestro array.

reduce es util para esos casos de sumar distinta cantidad de valores.
*/

let sumNumbers = randomArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sumNumbers)


//Ese es para un caso, pero hay para mas, por ejemplo para encontrar si se repite una palabra.

const randomWords = ['Ford', 'Saul', 'Tesla', 'Tesla', 'Grapes', 'Strawberrys', 'Grapes', 'Grapes']

const wordsFrecuency = randomWords.reduce((accumulator, currentValue) => {
 if (accumulator[currentValue] ) {
    accumulator[currentValue]++

} else { 
    accumulator[currentValue] = 1
 }

 return accumulator


}, {})

console.log(wordsFrecuency)


/*
FIND y FindIndex, son para encontrar elementos especificos de un array. con find podemos encontrar elementos mediante condiciones, por ejemplo:

FindIndex nos permite encontrar el primer elemento de un array, que satisfasca una condicion en especifico. A diferencia de find que lo hace de forma mas general
y sencilla, con index, es mas complicado pero nos permite encontrar elementos de forma mas especifica.
*/

let multipleOf5 = [5, 10, 15, 20, 25]
let otherNumbers = [1, 2, 3, 4 ,5 ,6 ,7 ,9]
let biggerThan10 = multipleOf5.find(number => number > 10)


console.log(multipleOf5, biggerThan10,randomArray)


//con findidex

let numbersAgain = [1, 2, 3, 4 ,5 ,6 ,7 ,9, 10]
let fiveBigger = multipleOf5.findIndex(number => number > 10 )

console.log(fiveBigger)

//slice es una cura, namas pones el array y con slice le dices de donde a donde quieres que te mande datos. y es inmutable
let pedazito = numbersAgain.slice(2, 7)
console.log(pedazito)




/*

Con spread operators, podemos copiar arrays, y a esas copias agregarle mas cosas que no son del array original, podemos tambien concatenar arrays

*/


console.log(...numbersAgain) //copia del array numbersAgain
console.log(4, ...numbersAgain, 2, 4, 4)
console.log(...numbersAgain, ...multipleOf5)


function plus (a, b, c) {
    return a + b + c;
}
const simpleArray = [24, 32, 64]
const sumArray = plus(...simpleArray)

console.log(sumArray)

