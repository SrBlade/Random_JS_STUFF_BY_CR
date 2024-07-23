
//construimos nuestra constante de numero secreto utilizando math.floor y math.random, luego le damos desde que rango a que rango.
//mas adelante dire sobre math floor y random

const numeroSecreto = Math.floor(Math.random() * 100 + 1)

//construimos la const que es con la que actuaremos con el usuario. 'prompt' es como el input de javascript. nos permite decirle algo al usuario para que
//inserte un valor.

const playerNumber = parseInt (prompt("Adivina el numero del 1 al 100"));

console.log(`This is the number you selected: ${playerNumber}`)

if (playerNumber === numeroSecreto) {
    console.log('Ganaste pibe')
} else if (playerNumber < numeroSecreto) {
    console.log(`El numero esta muy bajito`)
} else if (playerNumber > numeroSecreto) {
    console.log(`El numero esta muy alto`)
} else {
    console.log(`Siquiera es un numero lo que me estas poniendo???`)
}

