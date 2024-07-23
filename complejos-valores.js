let x = 5
let y ='Klk'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 20
b = 'ademas'
c = undefined

function cambiar_valores (a, b, c) {
x = 20
y = 'hola'
z = null
}

cambiar_valores(x, b, z)
console.log(x, b, z)

cambiar_valores(a,b,c)

//agregar objetos a arrays // paso por referencia

let frutas = ['manzana', 'naranjas']
frutas.push ('uvas')
console.log(frutas)


//paso por valor

let j = 1
let k ='Hola'
let l = null
let n = j
let m = k
let v = l
console.log(j,k,l,n,m,v)
n = 12
m ='Platzi'
v = undefined