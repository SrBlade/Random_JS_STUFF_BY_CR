//Que son los arrays\\

/*
Los arrays son objetos que contienen multiples datos ordenados, que comienzan desde el indice 0 (no desde el 1). Miralo como si fueran variables donde
podemos almacenar mas de 1 valor. Conjunto de elementos que se guardan en una variable


FORMAS DE CREAR ARRAYS:
*/

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



