<<<<<<< HEAD
//ahora si, funcion de verdad

/* function priceWithDiscount (price, discountPercentaje) {
    descuento = (price * discountPercentaje) / 100
    FinalValue = price - descuento
    return FinalValue

}

let price = 100
let discountPercentaje = 20
let Total = priceWithDiscount(price, discountPercentaje) 



console.log('El precio original era de: ' + price)
console.log('El descuento es de ' + discountPercentaje + '%')

console.log('El precio final es de: ' + Total +'$')
*/
//Dejame explicarme: Primero llamamos a function para declararle a js que haremos una funcion
//luego, indicamos el nombre de la funcion, lo correcto es que la primera word esta en minus y las demas en mayus
//Ademas de ello, en los () le indicamos los valores de la funcion, aveces se declara, aveces no. depende del context
//En este caso, llamamos a price para dentro de la funcion indicarle que hara, al igual que discount percentaje.

//tras llamarlos, dentro de la funcion indicamos como en un boceto que hara cada uno, no ponemos sus valores, solo que haran.
//tras indicarle que haran ahora si fuera de la funcion ponemos sus valores, cuanto es price cuanto es percentaje, y cuando indiquemos su valores con let, const o var
//ahora si, volvemos a llamar la funcion en una variable que sera la que ejecute la funcion, en este caso finalprice
//y ya pues con console lo llamamos




//version mejorada de parte de mi compa el gpt
/*
function priceWithDiscount(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const finalPrice = price - discount;
    return { discount, finalPrice };
}

let price = 3230;
let discountPercentage = 18;
let infoPrice = priceWithDiscount(price, discountPercentage);
let valuePercentage = parseFloat(infoPrice.discount, 2);
let finalPrice = parseFloat(infoPrice.finalPrice, 2);

console.log('El precio original era de: ' + price + '$');
console.log('El descuento es de: ' + discountPercentage + '%');
console.log('El valor del descuento es de: ' + valuePercentage + '$');
console.log('El precio final es de: ' + finalPrice + '$');

//En programacion, o javascript. El termino 'callback' se refiere a pasar una funcion como argumento. Seria:

function x() {

}

function y (x) {


}
y(a) 
//se pasa como argumento a la funcion y, la funcion x, y ya seria un callback

//Tambien podemos retornar funciones.

function x() {
    function y() {

    }
}

//Esto nos dice que fuera de la funcion y, pero dentro de la funcion x, algo va a suceder. y puede ser viceversa tambien.

//Tambien podemos asigarnarles funciones a variables, y no es necesario ponerle nombre ya que la const x es como su nombre

const x = function () {

}

//se conocen como function expression: el dar a variables funciones.

//los metodos: se crean funciones y variables como siempre, pero, se le dice a la funcion que se ejecutara en el contexto de la variable obj con call

function a() {}
const obj = {}
a.call(obj)

//nested functions o anidar funciones
//en resumen: tener varias funciones dentro de una fuuncion, como un hilo de funciones

function x() {
    function y() {
        function z () {

        }
        z()
    }
    y()
}

a()*/

//cada una se puede llamar fuera de la misma a la vez.

//A metodo, se le conoce como ejecutar una funcion, dentro de un objeto. example
/*
const ship = {
    name: 'Punta Barrow',
    shipMessage: function shipMessage()
        {
            console.log('this is a message ')
        }
    
}

ship.shipMessage()

//funciones puras: funciones que al darle un mismo input, nos regresara el mismo output(osea que si le decimos 2 + 2 sabremos que es 2 + 2)


//side efects
//no siempre son malos, y usualmente ocurren al
//manipular el dom (Document object model)
//modificar variables globales\
//al hacer http request
//al imprimir mensajes en pantalla (console o alert)
//funcion pura:


function sum (a, b) {
    return (a + b)

}

//una funcion impura se produce cuando hay un side effect de los dichos anteriormente arriba
//example

function rest (x, y) {
    console.log('el pepe' + 'ete sech ete sech')
    return x - y
}

//otro tipo de funcion impura, es que al tener una variable global, esta la vayamos modificando a lo largo del tiempo
//example

total = 0

function contadorImpuro () {
    total += a //aqui le decimos que total sera igual, a la suma o a lo que es igual a a. en vez de hacer total = total + a reducimos texto con eso
    return total

}

//ya es impura porque a lo largo de la funcion, estaremos modificando esa variable global que es a.


const Batman = {
    name: 'Batman',
    saludar: function () {
        console.log(`Hola, soy ${this.name}`)
    }

}

Batman.saludar()



function contador () {
    let contador = 0
    while(contador <= 100) {
        console.log(contador)
        contador++;
    }



}

contador()
*/


/* const suma = (a, b) => a + b;

console.log(suma(3, 6))


function sumar (x, y) {
    return x + y
}

console.log(sumar(3,6))
*/



let brand = 'Samsung'
let model = 'Galaxy S'
let yearModel = 2024
let price = 999

function smarthPhone () {
    let brand = 'Apple'
    let model = 'Iphone'
    let yearModel = 2024
    let price = 1099

    return (`This is the ${brand} ${model} ${yearModel} model. At ${price} USD `)
}

console.log(smarthPhone())

console.log(`This is the ${brand} ${model} ${yearModel} model. At ${price} USD `)
=======
//ahora si, funcion de verdad

/* function priceWithDiscount (price, discountPercentaje) {
    descuento = (price * discountPercentaje) / 100
    FinalValue = price - descuento
    return FinalValue

}

let price = 100
let discountPercentaje = 20
let Total = priceWithDiscount(price, discountPercentaje) 



console.log('El precio original era de: ' + price)
console.log('El descuento es de ' + discountPercentaje + '%')

console.log('El precio final es de: ' + Total +'$')
*/
//Dejame explicarme: Primero llamamos a function para declararle a js que haremos una funcion
//luego, indicamos el nombre de la funcion, lo correcto es que la primera word esta en minus y las demas en mayus
//Ademas de ello, en los () le indicamos los valores de la funcion, aveces se declara, aveces no. depende del context
//En este caso, llamamos a price para dentro de la funcion indicarle que hara, al igual que discount percentaje.

//tras llamarlos, dentro de la funcion indicamos como en un boceto que hara cada uno, no ponemos sus valores, solo que haran.
//tras indicarle que haran ahora si fuera de la funcion ponemos sus valores, cuanto es price cuanto es percentaje, y cuando indiquemos su valores con let, const o var
//ahora si, volvemos a llamar la funcion en una variable que sera la que ejecute la funcion, en este caso finalprice
//y ya pues con console lo llamamos




//version mejorada de parte de mi compa el gpt
/*
function priceWithDiscount(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const finalPrice = price - discount;
    return { discount, finalPrice };
}

let price = 3230;
let discountPercentage = 18;
let infoPrice = priceWithDiscount(price, discountPercentage);
let valuePercentage = parseFloat(infoPrice.discount, 2);
let finalPrice = parseFloat(infoPrice.finalPrice, 2);

console.log('El precio original era de: ' + price + '$');
console.log('El descuento es de: ' + discountPercentage + '%');
console.log('El valor del descuento es de: ' + valuePercentage + '$');
console.log('El precio final es de: ' + finalPrice + '$');

//En programacion, o javascript. El termino 'callback' se refiere a pasar una funcion como argumento. Seria:

function x() {

}

function y (x) {


}
y(a) 
//se pasa como argumento a la funcion y, la funcion x, y ya seria un callback

//Tambien podemos retornar funciones.

function x() {
    function y() {

    }
}

//Esto nos dice que fuera de la funcion y, pero dentro de la funcion x, algo va a suceder. y puede ser viceversa tambien.

//Tambien podemos asigarnarles funciones a variables, y no es necesario ponerle nombre ya que la const x es como su nombre

const x = function () {

}

//se conocen como function expression: el dar a variables funciones.

//los metodos: se crean funciones y variables como siempre, pero, se le dice a la funcion que se ejecutara en el contexto de la variable obj con call

function a() {}
const obj = {}
a.call(obj)

//nested functions o anidar funciones
//en resumen: tener varias funciones dentro de una fuuncion, como un hilo de funciones

function x() {
    function y() {
        function z () {

        }
        z()
    }
    y()
}

a()*/

//cada una se puede llamar fuera de la misma a la vez.

//A metodo, se le conoce como ejecutar una funcion, dentro de un objeto. example

const ship = {
    name: 'Punta Barrow',
    shipMessage: function shipMessage()
        {
            console.log('this is a message ')
        }
    
}

ship.shipMessage()

//funciones puras: funciones que al darle un mismo input, nos regresara el mismo output(osea que si le decimos 2 + 2 sabremos que es 2 + 2)


//side efects
//no siempre son malos, y usualmente ocurren al
//manipular el dom (Document object model)
//modificar variables globales\
//al hacer http request
//al imprimir mensajes en pantalla (console o alert)
//funcion pura:


function sum (a, b) {
    return (a + b)

}

//una funcion impura se produce cuando hay un side effect de los dichos anteriormente arriba
//example

function rest (x, y) {
    console.log('el pepe' + 'ete sech ete sech')
    return x - y
}

//otro tipo de funcion impura, es que al tener una variable global, esta la vayamos modificando a lo largo del tiempo
//example

total = 0

function contadorImpuro () {
    total += a //aqui le decimos que total sera igual, a la suma o a lo que es igual a a. en vez de hacer total = total + a reducimos texto con eso
    return total

}

//ya es impura porque a lo largo de la funcion, estaremos modificando esa variable global que es a.
>>>>>>> 2c5e6ec5c25bd340e440676b10d66c568d12af01
