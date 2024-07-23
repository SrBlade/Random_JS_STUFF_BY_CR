//convencion de nomeclantura es cuando ahora si, el nombre de la funcion empieza en mayus
//construimos nuestra funcion, con los elementos que tendra nuestro game o lo que sea(vidas, dano, si es de carros marcas anos etc)
function Car (brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
    this.GiveDetails = function () {
        console.log(`The car you are seeing right now is: ${this.brand} ${this.model} ${this.year}`)
        console.log(`The car you are seeing right now is: ${Ford.brand} ${Ford.model} ${Ford.year}`)
        console.log(`The car you are seeing right now is: ${Toyota.brand} ${Toyota.model} ${Toyota.year}`)
        console.log(`The car you are seeing right now is: ${Mazda.brand} ${Mazda.model} ${Mazda.year}`)
        console.log(`The car you are seeing right now is: ${Jeep.brand} ${Jeep.model} ${Jeep.year}`)

    }

   

}

//construimos una variable const invocando a esa funcion
//con new le indicamos que sera un nuevo objeto que tendra los datos de esa function

const Tesla = new Car('Tesla', 'ModelS', '2024')

const Ford = new Car('Ford', 'Explorer', '2024')

const Toyota = new Car('Toyota', 'Corolla', '1991')

const Mazda = new Car('Mazda', 'Demio', '2011')

const Jeep = new Car('Jeep', 'Grand Cherokke', '2024')

console.log(Tesla.GiveDetails(Car()))



//otro ejemplo mas sencillo que ese de arriba qsy

/*function Rocket (model, message) {
    this.model = model
    this.launchMessage = function () {
        console.log(message)


    }


}

const artemis = new Rocket('Artemisa IV', 'Vamos a la luna')
const Falcon9 = new Rocket('Falcon 9', 'Vamos a marte')


console.log(artemis.model )
console.log(artemis.launchMessage())
*/
//tras durar rataso con esto, era el this que tenia que ir incluso en la funcion lauch. debido a que con el this le especificamos que es el message de tu sabe donde.

//con arrow functions lo podemos hacer mas corto

/*function Rocket (model, message) {
    this.model = model
    this.launchMessage = () => message 
    
}

const artemis = new Rocket('Artemisa IV', 'Vamos a la luna')
const Falcon9 = new Rocket('Falcon 9', 'Vamos a marte')


console.log(artemis.model )
console.log(artemis.launchMessage())
*/
//esto nos sirve cuando son mensajes cortos o cosas sencillas nuevamente, cuando son cosas muy grandes debemos usar otros metodos.

//ademas con arrow functions, podemos mandar a llamar los mensajes como variables, asi tenemos mensajes personalizados y no hay que estar escribiendo

const especialMessage = () => 'Vamos a la lunaaaaa'

function Rocket (model, message) {
    this.model = model
    this.launchMessage = message 
    
}

const artemis = new Rocket('Artemisa IV', especialMessage)
const Falcon9 = new Rocket('Falcon 9', 'Vamos a marte')


console.log(artemis.model )
console.log(artemis.launchMessage())

//ademas podemos construir objetos a partir de arrow functions:

const arrowObject = (model, message) => ({
    model: model ,
    mainMessage: message

})

const especialMessageforarrowfunction = () => 'Vamos ahora a marteeee'

const SaturnV = arrowObject('SaturnV', especialMessageforarrowfunction)

console.group(SaturnV.model)

console.group(SaturnV.mainMessage())

//por razones de que no entiendo porque no funciona en edge, no podre practicar del todo bien la clase de window y uso estricto, sin embargo, un resumen seria:

//podemos hacer codigo directamente desde la consola de mi navegador, cabe destacar que a la hora de desplegar mensaje
//podemos usar window.name para que nos de el nombre de lo que queramos
//pero con use strict, al colocarlo al navegador, este funcionara como en toda la vida.