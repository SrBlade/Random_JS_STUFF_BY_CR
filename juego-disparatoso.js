function personaje (nombre, vida, puntosAtaque, puntosDefensa, puntosVelocidad, IQ, tipo) {
this.vida = vida
this.puntosAtaque = puntosAtaque
this.puntosDefensa = puntosDefensa
this.puntosVelocidad = puntosVelocidad
this.IQ = IQ
this.tipo = tipo
this.nombre = nombre

this.message = function () {

    console.log(`El personaje es: ${this.nombre}
        tiene ${this.puntosAtaque} puntos de ataque,
      ${this.puntosDefensa} puntos de defensa, ${this.puntosVelocidad} es su puntaje de velocidad,
      ${this.IQ} su IQ total y su tipo es: ${this.tipo}. Ademas le queda ${this.vida} vidas.`)


}


}

let kashimo = new personaje('Kashimo', '3', '8', '5', '6', '125', 'Trueno')

kashimo.message()


//las expresiones son pedazos de codigo que producen un valor:
//example:

'hola' //produce hola
32 + 17 // produce 49

3 * (2 + 1) //tiene 5 expresiones en total: 3 * 2 + 1, el 3 solo, el 2 + 1, el 2 y el 1.

//las declaraciones son aquellas instrucciones que nos dan la base de nuestro codigo. es como un pastel que recien sale del horno. no esta decorado
//solo tiene la masa.

//Las expresiones siempre dan un valor y van usualmente acompanadas.

//las declaraciones son las instrucciones que le damos directamente al computador. como una variable.