<<<<<<< HEAD
function Biografias (nombre, fecha, labor) {
    this.nombre = nombre
    this.fecha = fecha
    this.labor = labor
    this.Message = function () {
        console.log(`Este es ${this.nombre} ${this.fecha} ${this.labor}`)

    }

}



const Calvin = new Biografias('Calvin Bobadilla', 'nacido un 12 de abril de 2006', 'Actualmente trabajando de programador')









console.log(Calvin.Message(Biografias()))



function biografia (name, whois,date,otherinfo) {
        this.name = name
        this.whois = whois
        this.date = date
        this.otherinfo = otherinfo
        this.mensaje = function () {
            console.log(`La biografia es de: ${this.name} ${this.whois} ${this.date} ${this.otherinfo}`)


        }


    }








let tonyStark = new biografia(`Tony Stark`, `Fue un heroe que salvo incontables veces al planeta tierra, (New York, sokovia, etc)`, `Ni idea de cuando  nacio, creo que fue por alla en 
    el ano 1977`, `Fue el que mato a thanos, salvo al universo de extinguirse, y es un suuuuper genio` )



    console.log(tonyStark.mensaje(biografia()))



    //version del chatgpt con buenas practicas, etc

    // Constructor para biografías
function Biografia(nombre, fecha, labor) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.labor = labor;
    this.message = function() {
        console.log(`Este es ${this.nombre}, ${this.fecha}, ${this.labor}`);
    };
}

// Crear una instancia de Biografia
const calvin = new Biografia('Calvin Bobadilla', 'nacido un 12 de abril de 2006', 'Actualmente trabajando de programador');

// Llamar al método message
calvin.message();

// Constructor para biografías con más detalles
function BiografiaDetallada(nombre, descripcion, fecha, informacionAdicional) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.informacionAdicional = informacionAdicional;
    this.mensaje = function() {
        console.log(`La biografía es de: ${this.nombre}. ${this.descripcion}. ${this.fecha}. ${this.informacionAdicional}`);
    };
}

// Crear una instancia de BiografiaDetallada
let Stark = new BiografiaDetallada(
    'Tony Stark',
    'Fue un héroe que salvó incontables veces al planeta tierra (New York, Sokovia, etc.)',
    'Ni idea de cuando nació, creo que fue por allá en el año 1977',
    'Fue el que mató a Thanos, salvó al universo de extinguirse, y es un súper genio'
);

// Llamar al método mensaje
tonyStark.mensaje();


//pero en general muy parecida

var x = 10
=======
function Biografias (nombre, fecha, labor) {
    this.nombre = nombre
    this.fecha = fecha
    this.labor = labor
    this.Message = function () {
        console.log(`Este es ${this.nombre} ${this.fecha} ${this.labor}`)

    }

}



const Calvin = new Biografias('Calvin Bobadilla', 'nacido un 12 de abril de 2006', 'Actualmente trabajando de programador')









console.log(Calvin.Message(Biografias()))



function biografia (name, whois,date,otherinfo) {
        this.name = name
        this.whois = whois
        this.date = date
        this.otherinfo = otherinfo
        this.mensaje = function () {
            console.log(`La biografia es de: ${this.name} ${this.whois} ${this.date} ${this.otherinfo}`)


        }


    }








let tonyStark = new biografia(`Tony Stark`, `Fue un heroe que salvo incontables veces al planeta tierra, (New York, sokovia, etc)`, `Ni idea de cuando  nacio, creo que fue por alla en 
    el ano 1977`, `Fue el que mato a thanos, salvo al universo de extinguirse, y es un suuuuper genio` )



    console.log(tonyStark.mensaje(biografia()))



    //version del chatgpt con buenas practicas, etc

    // Constructor para biografías
function Biografia(nombre, fecha, labor) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.labor = labor;
    this.message = function() {
        console.log(`Este es ${this.nombre}, ${this.fecha}, ${this.labor}`);
    };
}

// Crear una instancia de Biografia
const calvin = new Biografia('Calvin Bobadilla', 'nacido un 12 de abril de 2006', 'Actualmente trabajando de programador');

// Llamar al método message
calvin.message();

// Constructor para biografías con más detalles
function BiografiaDetallada(nombre, descripcion, fecha, informacionAdicional) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.informacionAdicional = informacionAdicional;
    this.mensaje = function() {
        console.log(`La biografía es de: ${this.nombre}. ${this.descripcion}. ${this.fecha}. ${this.informacionAdicional}`);
    };
}

// Crear una instancia de BiografiaDetallada
let Stark = new BiografiaDetallada(
    'Tony Stark',
    'Fue un héroe que salvó incontables veces al planeta tierra (New York, Sokovia, etc.)',
    'Ni idea de cuando nació, creo que fue por allá en el año 1977',
    'Fue el que mató a Thanos, salvó al universo de extinguirse, y es un súper genio'
);

// Llamar al método mensaje
tonyStark.mensaje();


//pero en general muy parecida

var x = 10
>>>>>>> 2c5e6ec5c25bd340e440676b10d66c568d12af01
var x = 20