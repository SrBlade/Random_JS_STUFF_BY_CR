//pense que era una vaina de  no que funciones y que qsy, pero es basicamente todo lo que aprendimos xd
//Social media profile

let name = 'Calvin'
let last_name = 'Bobadilla'
let age = 18
let city = 'Santo Domingo'

let hobbies = 'Jugar, programar, y hacer ejercicio'


let texto_final = `Hola, me llamo ${name} ${last_name}, tengo ${age} y vivo en ${city}, esta es una prueba para ver si
he hecho el ejercicio bien de este modo, pero dejame contarte aun asi que mis hobbies son ${hobbies}, y eso seria todo!!!`

console.log(texto_final)

//En un principio pense que era complejo pero es sencillo, dejame hacerlo mejor

//Person info

const nombre = 'Calvin'
const apellido = 'Bobadilla Fernandez'
const edad = 18
const is_student = true

//city info

let ciudad = 'Hato nuevo, manoguayabo, Santo Domingo, Dominican Republic'
let zip = 1232334

//hobbies

let hobbie1 = 'Play games,'
let hobbie2 = 'Progamming web apps,'
let hobbie3 = 'go to the gym'

//final info

let final_info = `Hi, my name is ${nombre} ${apellido} i am ${age} and i live in ${ciudad} ${zip}, currently studying at platzi because i am a student ${is_student}
to conclude this info, let me tell you about my hobbies, i like: ${hobbie1} ${hobbie2}, ${hobbie3}. this is all, thank you!`

console.log(final_info)
console.log(typeof final_info)

//other method

//user info

let username = 'SrBlade'
let real_name = 'Calvin Bobadilla'

//for the address:

const direction = {
    citizen: 'Santo domingo',
    other: 'im just testing this way',

}

//en esos casos cuando son varios elementos de un elemento principal, lo mejor es en vez de crear variables por separado
//puedo crear unas llaves y meter los multiples elementos ahi.

//otra mejor forma de hacer los hobbies era con arrays

const my_hobbies = ['my hobbies are: ',' Coding',' reading',' and Gaming']

console.log(my_hobbies)

let full_text = `Hello! my name is ${real_name} but you can call me ${username}
i live in ${direction.citizen} ${my_hobbies.join(' ' )}. that's all!`

console.log(full_text)