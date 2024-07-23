//create avengers objets
//Creamos el objeto de los vengadores, con su nombre y atributos correspondiente.
function avengers (name, habilities, alive ) {
    this.name = name
    this.habilities = habilities
    this.alive = alive
    this.isLeader = false
    //para despues
    this.archivements = []
    this.enemies = []

//creamos un metodo con this.displayinfo para mostrar la informacion de los vengadores, a diferencia de como yo hice que fue console.log directo
    this.displayInfo = function () {
        console.log(` Avengers information:

     name: ${this.name}
      habilities: ${this.habilities}
    alive: ${this.alive}
    
    ${this.isLeader ? 'Leader: YES' : 'Leader: NO' }
            `)


//this.isleader nos dice: con ? es casi como un if, pregunta y lee si es leader, si esta false pone que no, si esta true pone que yes
    }
//para lo de lider, creamos otro metodo para que cuando hagamos console, solo a cierto personaje diga que es el lider
    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become leader of the avengers: `)

    }

}

const ironMan = new avengers('IronMan', 'Genius, billionare and Iron Suit', false)
const captainAmerica = new avengers('Captain America', 'Human above strength, speed, durability and excelent hand v hand fighter', true)
const thor = new avengers('Thor, son of Odin', 'Super strength, speed, God of thunder ', true)

ironMan.displayInfo()
captainAmerica.displayInfo()
thor.displayInfo()

captainAmerica.becomeLeader()

ironMan.displayInfo()
captainAmerica.displayInfo()
thor.displayInfo()