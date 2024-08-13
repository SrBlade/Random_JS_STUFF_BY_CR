<<<<<<< HEAD
//las arrow functions son una alternativa a las funciones normales, mas sencillas pero a la vez mas limitas:
//se crean:

const arrowFunction = (marca, modelo) => {
    console.log(`Bienvenido a ${name1}, este telefono es de la marca ${marca} modelo ${modelo}`)
    

}

function paraElNombre () {

}
const marca = 'Samsung'
const modelo = 'Galaxy S24'
const name1 = 'Samsung'

arrowFunction('Samnsung', 'Galaxy s24')
arrowFunction()

//arrow function - explicit return es cuando directamente en el arrow function le ponemos el return

const explicitArrow = (a, b) => {
    return a + b


}


//arrow function - implicit return 

const implicitArrow = name => {`Hi, this is my name: ${name}`}



// a este tipo de arrow le podemos quitar los parentesis si es solo un argumento. Si fuera mas de uno, si necesita parentesis


const xFunction = {
    name: 'Tony Stark',
    TonySaysFunction: function message (message) {
        tony = console.log(`${this.name} says ${message}`)
    },
    
    TonySaysArrow:  (message)  => {
        tony = console.log(`${name} says ${message}`)
    }

}

const name = 'tony stark'

//with arrow function

xFunction.TonySaysFunction('The civil war is just getting started')

xFunction.TonySaysArrow( 'the civil war 2 is in coming' , )

//cabe destacar, si bien es cierto que los arrow functions son mas compactos y sencillos, tienen muchas limitaciones
//no se puede hacer this o super
//no apto para call, apply o bind
//no tienen argumentos o palabras clave como  new target entre otros. en resumen, solo usalo cuando es algo sencillito

=======
//las arrow functions son una alternativa a las funciones normales, mas sencillas pero a la vez mas limitas:
//se crean:

const arrowFunction = (marca, modelo) => {
    console.log(`Bienvenido a ${name1}, este telefono es de la marca ${marca} modelo ${modelo}`)
    

}

function paraElNombre () {

}
const marca = 'Samsung'
const modelo = 'Galaxy S24'
const name1 = 'Samsung'

arrowFunction('Samnsung', 'Galaxy s24')
arrowFunction()

//arrow function - explicit return es cuando directamente en el arrow function le ponemos el return

const explicitArrow = (a, b) => {
    return a + b


}


//arrow function - implicit return 

const implicitArrow = name => {`Hi, this is my name: ${name}`}



// a este tipo de arrow le podemos quitar los parentesis si es solo un argumento. Si fuera mas de uno, si necesita parentesis


const xFunction = {
    name: 'Tony Stark',
    TonySaysFunction: function message (message) {
        tony = console.log(`${this.name} says ${message}`)
    },
    
    TonySaysArrow:  (message)  => {
        tony = console.log(`${name} says ${message}`)
    }

}

const name = 'tony stark'

//with arrow function

xFunction.TonySaysFunction('The civil war is just getting started')

xFunction.TonySaysArrow( 'the civil war 2 is in coming' , )

//cabe destacar, si bien es cierto que los arrow functions son mas compactos y sencillos, tienen muchas limitaciones
//no se puede hacer this o super
//no apto para call, apply o bind
//no tienen argumentos o palabras clave como  new target entre otros. en resumen, solo usalo cuando es algo sencillito

>>>>>>> 2c5e6ec5c25bd340e440676b10d66c568d12af01
//DRY: DON'T REPEAT YOURSELF