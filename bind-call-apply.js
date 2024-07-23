//son distintos metodos para ejecutar los this en funciones o objetos

function Car (brand, year) {
    console.log(`the car model is: ${this.model} of the brand: ${brand} and the model year is: ${year}`)


}
const brand = 'Tesla,'
const year = '2024'

const vehicle = {
    model: 'Tesla Model S,'

}

Car.call(vehicle, brand, year)

//esa es la forma con call, pero a la hora de tener muchas variables lo correcto sera tener todo en un array:

const necessaryValues = [brand, year]
Car.apply(vehicle, necessaryValues)

//asi se aplica apply, en parentesis, se dan los datos, y lo mejor es que los muchos datos que tengamos almacenarlas en una variable, y despues llamarlos

//con bind, basicamente nos crea una funcion para almacenar nuestros datos.

const vehicleWithBind = Car.bind(vehicle, brand, year)
vehicleWithBind()

//si hacemos console log a vehicle with bind: nos dara que es un bound (un bind pues, funcion)

console.log(vehicleWithBind)

//el cual usaremos dependera del contexto: si tenemos pocos parametros con call es suficiente, si tenemos muchos podemos ponerlos
//en un array y utilisar apply
//bind si necesitamos una funcion para tener otra funcion wtf
//cabe destacar, que con llamar 'call' es suficiente para ejecutar lo que sea que queremos ejecutar
//para llamar a bind, es necesario ejecutarla como si fuera una funcion mediante una variable o algo (qsy())



function carBrand ( modelo, fecha) {
    console.log(`Bienvenido, la marca de este auto es: ${this.marca}, del ano ${fecha} y este es el modelo: ${modelo}`)

}

const marca = {
    marca: 'Tesla'
}

const modelo = 'S'
const fecha = '2023'

carBrand.call(marca, modelo, fecha)

const mainValues = [modelo, fecha]
carBrand.apply( marca, mainValues)

const mainBind = carBrand.bind(marca, modelo, fecha)
mainBind()
