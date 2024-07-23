//hablaremos del condicion tenrario ?

//puede ser una forma concisa o 'express' de usar if y else
//for example:

/*let condition = condition

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
*/

function day (dia) {

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
                    break
    
                default:
                    console.log("insert a valid day please.")
                    break
    }
    }
    
    
    day("sunday")