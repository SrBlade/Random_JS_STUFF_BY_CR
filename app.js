//Promesas

/*
Las promesas tienen 3 estados,

ESTADOS:
1- pending, o pendiente, se encuentra en pendiente hasta que se genere la promesa
2 = fullfield, cuando la promesa se resuelva, ya sea de manera correcta o incorrecta, se pondra en este estado.
3 - rejected(), que la promesa no se resolvio por x o y motivo. rechazado pa

CALLBACKS:
Las promesas tienen 2 callbacks:
una es resolve(o sea resuelto)
y la otra es rejected( o rechazado)

En las promesas existen 2 metodos para manejar los resultados:

then() si la promesa se ejecuta correctamente
catch() si presenta algun error
*/

//SINTAXIS

const Promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let succesfull = true
        if(succesfull) {
            resolve('la operacion fue exitosa!')
        } else {
            reject('algo anda mal')
        }
    }, 2000)
})


//otro mejor ejemplo

const aproved = new Promise((resolve, reject) => {
    console.log('Dame un momento para ver...')
    setTimeout(() => {
        let puntos = Math.floor(Math.random() * 10 + 1 )
        let nota = puntos
        if(nota > 7) {
            resolve(`GG pasaste con ${nota} que es la nota necesaria para pasar el examen, congrats!`)
        } else {
            reject(`Sorry!!! sacaste ${nota}, necesitas mas puntos para pasar.`)
        }
    }, 5000)
})

aproved.then((successMessage) => {
    console.log(successMessage)
})
.catch((errorMessage) => {
    console.log(errorMessage)
})

/*

Async and await, son formas mas legibles de convertir nuestro codigo javascript sincrono, a codigo javascript asincrono. Se introdujeron despues de los callbacks
osea son mas modernitos.

fetch: en busca de o ir a buscar.
.then solo se ejecuta si nos devuelve un resolved, si se ejecuta bien. Si no pasa directamente a catch
Por fin consumiremos una API

consumir una api, no es mas que ir en busca de algun tipo de dato en alguna fuente de informacion usando fetch



con async y await, en vez de then se usa try, y catch se mantiene igual

try / catch
*/

function consumirApi() {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json ())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

consumirApi()

//Hagamos esto mismo ahora pero con async y await

 async function consumirApiConAwait() { //Primera diferencia, en estas funciones debe aver un async al principio.
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data)


    } catch (error){
        console.log(error)


    }
}

consumirApiConAwait()

//Ahora, si tenemos varias urls que es lo comun, no se hace ese metodo, se hace otro que es el for await of, que es un for para que itere sobre cada api
//y haga los mismos procedimientos.

const APIS = [
    
         "https://rickandmortyapi.com/api/character",
         "https://rickandmortyapi.com/api/location",
         "https://rickandmortyapi.com/api/episode"
      
]




async function forAwaitOf() {
    
 try { for await (let url of APIS) {
    let response = await fetch(url) 
    let data = await response.json()
    console.log(data)
 }



 } catch (error) { 
    console.log(error)


 }
 
    

}


forAwaitOf()

