//strings primitivos: son los de toda la vida, son inmutables

const stringprimitivo = 'soy un string klk'
console.log(typeof stringprimitivo)

const stringxd = String('soy otro string klk')
console.log(typeof stringxd)

//strings objetos: son importantes porque a diferencia de los primitivos estos son objetos.

const stringobjeto = new String('Soy un string objeto')
console.log(typeof stringobjeto)

//Otra cosa, no se para que me servira por ahora peeeerro, ahi esta. acceder letra por letra a algo

let nombre = 'Calvin'
console.log(nombre[5])

//cuando es un metodo se usa parentesis, btw aca esta otra forma pero mas larga

console.log(nombre.charAt(2))

//ahora, si queremos hacerlo al revez, sabemos la letra pero no el numero, se procede a:

console.log(nombre.indexOf('a'))

//es importante que este entre comillas
//si le ponemos una palabra que no existe, este nos dara -1, y si le ponemos una palabra, este nos dara el numero de la 1era letra de la palabra
//example:

console.log(nombre.indexOf('Calvin')) //0 osea que inicia en el 0
console.log(nombre.indexOf('hola')) //-1 no existe

//si queremos saber la letra, pero en vez de izquierda, ahora derecha osea la ultma, se usa last

console.log(nombre.lastIndexOf('n'))

//otra maaas, si queremos saber las letras de x punto a x punto. cabe destacar que es el num letra inicial, y la num letra final + 1

console.log(nombre.slice(1, 7))

//para saber el lenght

console.log(nombre.length)

//para que salga en upper o lower
//es importante el parentesis si queremos el texto entero
console.log(nombre.toLocaleUpperCase())
console.log(nombre.toLocaleLowerCase())

//si queremos dividir el saludo desde x punto solo es: split('desde que caracter se divide')

const nombredividido = nombre.split('a')
console.log(nombredividido)

//ya que estara divido, podemos acceder a la posicion de alguno de lso elementos que se dividio, empezando desde el 0 claro esta

console.log(nombredividido[1])

//con trim podemos eliminar los espacios del principio y final de un texto

const trimconespacio = '   tiene espacios   '
const trimsinespacio = trimconespacio.trim()

console.log(trimsinespacio)

//replace para cambiar letras de un texto

const cambiar = 'hola mundo'
const cambiado = cambiar.replace('mundo', ' ')
console.log(cambiado)

//otros que copio y pego porque toy jalto XDD

let cadena = "¡Hola, Mundo!"; 
let resultado = cadena.includes("Mundo")
console.log(resultado) // Imprime: true*

let cadena2 = "¡Hola, Mundo!"
let resultado2 = cadena.startsWith("¡Hola")
console.log(resultado); // Imprime: true*

let cadena3 = "¡Hola, Mundo!";
let resultado3 = cadena.endsWith("Mundo!");
console.log(resultado); // Imprime: true*

let cadena4 = "¡Hola, ";
let cadena5 = "Mundo!"
let unionCadenas = cadena1.concat(cadena2);
console.log(unionCadenas); // Imprime: "¡Hola, Mundo!"*