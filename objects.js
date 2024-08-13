const casa = {
    color: 'blanco con negro',
    pisos: '2 pisos',
    tamano: '454 mt cuadrados',
    direccion: { //Podemos asignar llaves, o mejor dicho, asignar multiples valores al valor de una propiedad.
    Ciudad: 'Santo Domingo',
    municipio: 'Manoguayabo, Santo Domingo Oeste'
    },
    informacion() {
        console.log(`Esta casa es de ${casa.color}`)
    }
}


//Funciones constructoras, son las funciones que hemos usado en mokepon por ejemplo, la usamos para construir nuevas cosas y no repetir codigo.

//sintaxis

function Personaje (nombre, tipo, vida, ataque) {
    this.nombre = nombre
    this.tipo = tipo
    this.vida = vida
    this.ataque = ataque
}


const blade = new Personaje('Blade', 'Fuego', 5, 10)
const sahnt = new Personaje('Sahnt', 'Rayo', 3, 12)
const zekki = new Personaje('Zekki', 'Planta', 4, 6)




function imprimirMensaje () {
    console.log(`El personaje es ${this.nombre}, tiene ${this.vida} puntos de vida, es de tipo ${blade.tipo} y su dano es de ${blade.ataque}`)
     console.log(`El personaje es ${blade.nombre}, tiene ${blade.vida} puntos de vida, es de tipo ${blade.tipo} y su dano es de ${blade.ataque}`)
    
}

imprimirMensaje()


Personaje.prototype.frase = function() {
  return  console.log(`El personaje es ${this.nombre}, tiene ${this.vida} puntos de vida, es de tipo ${this.tipo} y su dano es de ${this.ataque}`)
}



//prototype es para agregar 'bocetos' de nuevos elementos en js. xample:


Personaje.prototype.velocidad = 14  //No se agrega directamente ya que es un prototype, pero si aparece como prototype

console.log(blade)

//Si queremos agregar una propiedad especifica a una instancia, llamamos a la instancia.el nuevo elemento.

blade.defensa = 14 //No se agrega directamente pero si aparece como prototype de nueva instancia.

//Para las funciones en objetos que son metodos, si usamos prototype ya le asignamos el nombre antes de la funcion, por ende no hay que nombrarla.

//Por otro lado, si queremos llamar a los datos de manera global usamos la instacia this


Personaje.prototype.detalles = function() {
    return console.log((`El personaje es ${this.nombre}, tiene ${this.vida} puntos de vida, es de tipo ${this.tipo} y su dano es de ${this.ataque}`))
}

blade.detalles() //Y ahora si accedemos a cada uno
sahnt.detalles()

/*

CLASS finalmente llegamos a class, es basicamente una version mejorada de las funciones constructoras y es la que se usa hoy dia.

*/


class Car {
 constructor(brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
 }
 information() {
    return console.log(`This is the ${this.brand} ${this.model}, in the color ${this.color}`)
 }
}


const tesla = new Car('Tesla', 'Model S', 'white')
const jeep = new Car('Jeep', 'Grand Cherokee', 'white')
const Ford = new Car('Ford', 'Explorer', 'red')

tesla.information()


/*
otros detalles, cuando creamos una clase, tambien se crea un prototipo de la misma, que es basicamente como si fuera un clon de esta, ya que copia tanto
propiedades como metodos.

Las instacias aun no estoy seguro de que sean, asi que vere si mas adelante lo dice o si no investigare aparte

*/


class Pokemon { //Esta clase de pokemon ya de por si genero un prototipo, ademas, podemos extender esta clase a otro, para que tome valores de esta clase
    constructor(region, tipo, calidad) {
        this.region = region
        this.tipo = tipo
        this.calidad = calidad
    }
    lanzaAtaque() {
        console.log(`El pokemon lanzo un ataque!`)
    }
}

class Fuego extends Pokemon {
    constructor(nombre, tipo, calidad,region) {
        super(calidad,tipo,region)
        this.nombre = nombre
    }
    lanzaAtaque() {
        console.log(`El pokemon lanzo una llamarada!`)
    }
    accion() {
        console.log(`${this.nombre} de tipo ${this.tipo} lanzo placaje!, y eso que es un ${this.calidad} de la region ${this.region}! `)
    }
}

const charmander = new Fuego('Charmander','Fuego','Kanto','No legendario')

console.log(charmander)

charmander.accion()
charmander.lanzaAtaque()






//Ahora para yo usar propiedades como el this de una clase, que vienen de otras clases, uso la palabra reserva super
//tambien cuando extendemos de una clase, podemos usar los metodos, y las propiedades de dicha clase a nuestro gusto.
//las intancias son los resultados de ese molde, osea el producto de las clases cuando las imprmimos


//cuando yo cree la clase pokemon, tambien se cree un prototipo, que para entederlo de forma sencilla, es como un clon de la clase, que se encuentra en segundo
//plano, el cual podemos inyectarle nuevos metodos sin que estos se inyecten directamente al codigo de la class. 

//La herencia es como mediante una clase, podemos heredar ciertos elementos de esta misma clase a otras subclases y sus instancias, siendo las instacias
//los new de la clase. examples



Pokemon.prototype.metodoPrueba = function() {
    console.log(`asdasdasd`)
}



