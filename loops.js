//for method
//iterar en programming significa objetos en los que podamos pasar uno por uno, a eso se le llama iterar
//example: iterar una lista: pasar por cada uno de los elementos de dicha lista para lograr algo.
//now, let's continue with for loop.
/*
for (variable; condicion; incremento) {
    //codigo que se ejecutara
}

    //esos son los pasos o elementos de un for.
    //cuando dicha condicion ya no se cumple, el codigo se deja de ejecutar. veo que es peligroso porque si la condicion nunca para de cumplirse pues puede ser
    //bobo

*/

//un ejemplo practico

/*let frutas = ['manzana', 'naranjas', 'peras', 'uvas', 'fresas']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
    
//tenemos una lista con 5 elementos, frutas
//el ciclo for, su sintaxis es casi siempre la misma para todo, por eso que siempre veia el for y el let i asi pero, se lee asi:

//para, la variable inicial i, que es igual cero, mientras su longitud sea menor a la misma variable i, incrementa su longitud.
//o dicho como dijo el profe diego de granda, mientras nuestra variable i, su condicion que (nombre de la variable.length) sea menor, al tamano de nuestro i
//que es 0,

console.log(frutas) //se imprime la lista lit, con for solo se imprimen los datos.

//other xample

let contar, max, msg = ''

max = parseInt(prompt('Teclea un numero: '))

for (contar = 0; contar < max; contar++) {
    msg += contar + ", ";
}

msg += contar;

console.log(contar)
*/

//loop foreach

/*

para realizar nuestro for each hacemos:

(nombre de la variable, arrar(arreglo) list o whatever).foreach(nombre del item, por ejemplo si son frutas, pos ponemos frutas) => generamos un arrow function y
tras el arrow functions ponemos llaves { y dentro de las llaves el codigo a ejecutar}

array.foreach(item) => {
    codigo a ejecutar
    
    }
y se repetira en cada uno de los elementos de dicha lista exclusivamente.

    */
/*

let frutas = ['manzana', 'fresas', 'uvas', 'naranjas']

frutas.forEach((item) => {
    console.log(item)
})

let num = 0
let produ = 1

array = [1, 2, 3, 4]

array.forEach((item) => {
    produ * item + num
    console.log(item)


})

//loop for of

//el loop for of en javascript es un loop que al igual que otros, nos ayudan a iterar desde un objeto a otro objeto, como strings o arrays e list

//su sintaxis es: for (variable of objeto (o lo que sea iterable)) {
//codigo a ejecutar}

//simple xample:

let canastaBasica = ['arroz ', 'pollo ', 'Habichuelas', 'huevos']

for (alimentos of canastaBasica) {
    console.log(alimentos)
}

//la variable puede ser cualqueira, esta tomara el valor de los elementos dentro del array o string, por eso que se pudo crear una variable nueva.

//un objeto es una estructura de datos donde se puede guardar informacion.

//los objetos tienen propiedades, que a la vez tienen un valor.

//a diferencia de for of que son para iteraciones, for in es mas para objetos.

//su estructura es: for (variable in objeto) {}

//otro ejemplo como el de la fruta, (is boring but anyway)

const frutas = {
 uvas: 2,
 fresas: 5,
 naranjas: 6,
 manzanas: 4,

}

for (alimentos in frutas) {
    console.log(alimentos)
}

//ahora, para que nos imprime tambien la cantidad de frutas, con `` llamamos a diferentes partes

for (alimentos in frutas) {
    console.log(`${alimentos} : ${frutas[alimentos]}`);
}


//for of solo se usa en arrays y strings iterables, no objetos ni numero. for in se usa para objetos con numeros. es util recordar porque es comun ese error.

//el ciclo while es muy sencillo, while es mientras. mientras una condicion sea true, algo se estara ejecutando.

/*

su sintaxis es:
while(condicion) {
    codigo
}
hay que tener mucho cuidado porque si ejecutamos un loop con while que no se puede cerrar, este se ejecutara infinitamente y puede comernos la memoria ram.
*/

//un ejemplo super util con while, es creando un contador sencillo

//declaramos nuestra variable en 0, pos va a tener que aumentar.

//contador = 0

//creamos nuestro while

/*while (contador <= 10) {
    console.log(contador)
    contador++;
}*/

//con ++ y el nombre de la variable, si es un number o integer esta ira en incremento.

//con do while, es algo parecido al while pero se diferencia en su sintaxis, se hace de la siguiente forma con un ejemplo


do {
    console.log(contador)
    contador++;
} while(contador <= 100)
 


    for(let i = 0; i <= 10000; i++) {
        console.log(i)
    } 


let message = 'Estos son los miembros de la justice league: '
console.log(message)

let justiceLeague = ['Flash', 'Batman', 'Superman', 'Aquaman', 'WonderWoman', 'Green lantern', 'Arrow', 'Martian ManHunter']

for (members of justiceLeague) {
    
    console.log(members)
}
let price = parseFloat(prompt('Cuanto cuesta el producto?'))
let originalPrice = price
let originalDiscount = parseFloat(prompt('De cuanto es el descuento? '))
let discount = originalDiscount

function calculateDiscount () {
    priceDiscount = originalPrice * discount / 100
    totalPrice = price - priceDiscount
    alert(`El precio original era de: ${originalPrice}`)
    alert(`El descuento es de: ${discount}`)
    alert(`Se le restaran ${priceDiscount} al producto`)
    alert(`El precio con descuento es de: ${totalPrice}`)

}


calculateDiscount()



//better

let precioPrompt = parseInt(prompt('De cuanto es el precio del producto?'))
let precio = precioPrompt

let descuentoPrompt = parseInt(prompt('De cuanto es el descuento en este producto?'))
let descuento = descuentoPrompt

function calcularDescuento (precio, descuento) {
    precioConDescuento = (precio * descuento) / 100
    precioTotal = precio - precioConDescuento
    
    alert(`El precio original era de: ${precio}`)
    alert(`El valor del descuento de este producto es de: ${descuento}`)
    alert(`El descuento es de: ${precioConDescuento}`)
    alert(`Asi que el precio final es de: ${precioTotal}`)


}

calcularDescuento(precio, descuento)



