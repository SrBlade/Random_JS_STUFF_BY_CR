//CONDICIONALES\\
/*
Las condicionales son utiles ya que nos permiten, en casos de que x cosas sucedan, ejecutar ciertos pedazos de codigo especificos para ese acontecimiento.
En todos los lenguajes de programacion hay condicionales, en python, ruby, java, javascript etc.

En el caso de javascript, las condicionales se ejecutan con if, else if y else. 
se crean:

Declaracion principal -- If (que condicion debe pasar) {
codigo a ejecutar
} else if (otra condicion en caso de que no suceda) {
 codigo a ejecutar
} else {
 codigo, en caso de que ninguna condicion se cumpla, esto es lo que debe pasar.
}

Veamos con un ejemplo, lo util que son:

*/


let edad = parseFloat(prompt('cual es tu edad?'));
 
if (edad >= 18) {
    alert('eres mayor de edad')
} else {
    alert('eres menor de edad')
}


//Aca creamos una variable edad, donde se almacena el valor que ingresa el usuario con un prompt.
//Con las condicionales, podemos saber si el usuario es mayor o menor de edad, ese es un ejemplo sencillo pero hay algunos muchisimos mas grandes.

//OTRO MEJOR EJEMPLO

let randomNumber = parseInt(Math.random() * 10 + 1);
let userGuess = parseInt(prompt('En que numero estoy pensando?'))

if (userGuess === randomNumber) {
    console.log('Waooo, adivinaste el numero!!')
} else if (userGuess > randomNumber) {
    console.log('Lo siento, se que es dificil pero intentalo de nuevo con un numero mas bajo.')

} else if (userGuess < randomNumber) {
    console.log('Lo siento, se que es dificil pero intentalo de nuevo con un numero mas alto.')
} else {

}



/* Aqui creamos un adivina el numero improvisado, en donde con las condicionales nos encargamos de manejar cada caso posible y realizar una accion en base al mismo.
Por ejemplo, si el numero es igual, que el usuario gane, si es menor, que elija un numero mas grande, y si es mayor uno mas pequeno. Ese es solo una pequena parte
del poder de las condicionales (O los 'if' como me gusta llamarlos)

NOTAS EXTRA: Podemos colocar cuantos else if queramos.

*/



/*let nombre_completo = 'Calvin'

if (nombre_completo === 'Calvin Bobadilla') {
    console.log('en efecto, es calvin')



} else {
    console.log('no es calvin')
}

if(nombre_completo != 'SrBlade') {
    console.log('is diferent')
    
    
        //si no se cumple
    } else if (let != algo) {
    mas = codigo
    } else {
        codigo_final
    }

//en resumen, se parecen a la de python. y no son precisamente complicados. las condicionales me permitiran a la hora de decir si no aparecio algo, etc.

//hablaremos del condicion tenrario ?

//puede ser una forma concisa o 'express' de usar if y else
//for example:

let condition = condition

condition ? yes : no

let age = 18
let voteAge = age >= 18 ? canVote : cantvote

//a better example

let mensaje 
//let edad = 20

if (edad >= 18) {
    mensaje = console.log('You are legal, go in')
} else {
    mensaje = console.log('You are too young men..')
}

console.log(mensaje)

//aqui estamos verificando si es mayor de edad, pero con ? podemos hacerlo mejor


edad  ? 'puedes pasar' : 'no puedes pasar'

//el como debi hacerlo

const edad = 18

const message = edad >= 18 ? 'Puedes pasar' : 'No puedes pasar'


//el siguiente condicional es SWITCH

//la forma en la que se ejecuta SWITCH es la siguiente

switch(valor/argumento) {
    case  valor1: 
    //codigo a ejecutar
    break
    case valor2:
        //codigo a ejecutar
    break
    default:
        //escribimos lo que sucedera si ninguno de estos casos se cumple
}

//colocamos switch, el valor o argumento a evaluar, y ya con llaves colocamos case (el valor) y abajo de ello el codigo a ejecutar.
//abajo le colocamos un brake para que en caso de que se ejecute bien, este se detenga
//y hacemos exactamente lo mismo, para el siguiente valor o valores que tengamos. esto se puede repetir cuantas veces se quiera.
//el break es para que no se ejecute el caso de abajo
//el default, es para que en caso de que ningun caso se ejecute, se ejecute si o si ese.

//real life xample

let product = 'Cellphones'

switch(product) {
    case "tablets":
        console.log("Ipads pro are at 1999 dollars")
        break
    case "SmartWatches":
        console.log("smartwatches at 199 dollars")
    break

    case "Computers":
        console.log("at 1999$ and more")
    break
    //puedo generar varios a la vez
    case "laptops":
    case "Smartphone":
        console.log('at 999 dollars')
    break

    default:
        console.log(`We still don't have ${product}`)
}


console.log("hay algo mas que desees?")

//otro xample

let dia = prompt("Insert a day please: ")
function day () {

switch(dia) {
    case "Monday":
    case "Tuesday":
    case "Wensday":
     case "thursday":    
     case "Friday":
        console.log(`At home studying javascript`)
    break

    case "saturday":
        case "sunday":
            console.log("at home, chill")

            default:
                console.log("insert a valid day please.")
}
}


day(Monday) */