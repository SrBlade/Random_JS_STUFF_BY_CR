console.log('hola mundo')

let CajaDeMazy = 'juguetes'
console.log(CajaDeMazy)

// Aparte de que estos son los comentarios, no debo PARA NADA:
// poner abreviados, las variables deben ser los mas DESCRIPTIVAS posibles
//nada de let cdm o let pcmazy o abreviados, todo descriptivos
//el porque, es para mi yo del futuro y otro colaborator:
//Porque asi podemos saber de que era esa variable y no confundirnos.

//SI PERMITIDO:
//Abreviaciones que si conoscamos example: "id" "url" abreviaciones
//de ese estilo, que basicamente sean terminos comunnes en programacion

let urlUser = 'Usuario.com'
let idUser = '123440122'
//ademas, lo correcto es que las variables esten siempre una debajo de la otra
//el orden no afecta en js, asi que para mas legibilidad:
//siempre declaremos las variables una debajo de la otra por ejemplo:

let example = 'variable de ejemplo'
//y el resto de variables pero en la parte de arriba al inicio.

const pi = '3.1416'

//const es para como su nombre lo indica, declarar constante, variables que no cambiaran.
//let = variables osea que varian cambian, para eso lo usamos
//const = no cambian, solo se les da un valor y ese valor es unico.

let TIPOS_DE_DATOS = ('tipos de datos')

let string = 'texto'
let integer = 12323
let boolean = true(false)
let bigint = 128312371237348953485793485('numeros grandes')
let null_undefined = null('nulo y tambien no definido aun')
let symbol = ('elementos que son unicos')
let complejos = 'arrays, que son listas, functions que son codigos de bloque reutilizables, y object que son objetos nota; los arrays tambien son objetos'
//Los datos inmutables que no mutan/cambian, se pasan por valor. los mutables son por referencias

//Ejemplo de inmutabilidad:

let numero = 37
numero = numero + 10
console.log(numero)