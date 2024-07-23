//null: se detecta como objeto aunque no lo es debido a que es un tipo de dato primitivo
//sin embargo, este no se arregla debido a que hay muchos programas que ya se adaptaron a este error.

const nulo = null
console.log(nulo)
console.log(typeof nulo)

//undefined: se usa para saber si algo ya tiene un valor o no. ademas en programacion usualmente no se declara, ya que el propio js lo hace por nosotros

let esto 

//al hacer console log dara undefined por defecto.

//los simbolos: son utiles porque nos permite dar identificadores unicos, no son simbolos literal, son digamos como cedulas para ciertos objetos

let ID = Symbol('id')
let user = {}
user[ID] = '1234'

console.log(user)

//primero creamos nuestra variable, (con un nombre logico) despues, con symbol, le indicamos que sera un simbolo y el nombre de dicho simbolo
//despues, para insertarle valores, creamos otra variable en donde con {} le indicamos que sus valores estaran ahi adentro y se los meteremos mas adelante
//con la variable, corchetes[nombre de la variable del id] y luego con = el valor que tendra, no solo le meteremos los valores
//tambien estara como id y eso nos lo tirara la consola.
//los simbolos son UNICOS E INMUTABLES se usan para asignar id o identificadores unicos a ciertos elementos.