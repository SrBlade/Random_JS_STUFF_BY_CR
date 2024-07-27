//En javascript podemos representar tanto los numeros enteros como los decimales. Como 35 y las iniciales del numero PI:

//Ejemplo y explicacion:
/*
const integer = 35
const decimal = 3.14

console.log(typeof number, typeof decimal)

/* 
Al crear nuestras variables con nuestros numeros, podemos a, la hora de imprimirlas, pedirle a JS que nos diga que tipo de datos son, usando (typeof variable)
no solo con numeros, sino tambien con strings, booleas, undefined etc.
*/

//Tambien en javascript podemos representar otros tipos de datos numeros, como notacion cientifica, infinity y NaN:

//EJEMPLOS
/*
const notacion = 5e6



const nan = NaN

console.log(typeof notacion,  typeof nan)

/*
Tras crear nuestras variables, imprimimos sus tipos de datos con typeof. Pero lo interesante es la funcion de cada uno: Con la notacion podemos representar
al igual que bigint, numeros grandes. Con NaN (Not a Number) nos sera util para en caso de que nos devuelva algo que no sea un numero, realizar alguna accion,
especialmente con condicionales. Y con infinity como su  nombre lo dice, devolver resultados que sean infinitos.
*/

//EJEMPLO FAMOSO
/*
const ceroEntreCero = 0/0
console.log(ceroEntreCero)

//Nos devolvera NaN, dado a que no se puede dividir sobre 0.

//Tambien en JS podemos hacer las operaciones aritmeticas de toda la vida:
//EJEMPLOS

const suma = 3 + 3
const resta = 2 - 2
const multiplicar = 3 * 3
const dividir = 10 / 2
console.log(suma, resta, multiplicar, dividir)

//Explicacion: Tras hacerle su respectiva impresion,  nos devolvera los resultados que esperamos: 6, 0, 9 y 5 como operaciones normales.

//Ademas podemos hacer otros tipos de operaciones aritmeticas como:

//modulo, que es para saber si un numero puede ser multiplo de otro

const modulo = 15 % 8

//Potencia, que se usa con doble **

const potencia = 3 ** 3
//Javascript a la hora de sumar decimales, de vez en cuando tiene algunos problemas con el redondeo de los mismo, dando numeros muy largos. Por ejemplo:

const problemita = 0.1 + 0.2
console.log(problemita)

//Nos devuelve: 0.3 seguido de 12 ceros y un 4. Sin embargo esto se soluciona indicandole a JS que nos muestre x cantidad de decimales usando toFixed.

console.log(problemita.toFixed(2))
//Nos devuelve 0.30


console.log(problemita === 0.3)

//el === es o significa exactamente igual, osea que tiene que tener tanto el mismo valor, como tipo de dato.

//Otras formas de hacer operaciones aritmeticas con JS es usando la raiz, el producto absoluto y el metodo 'random' para que nos devuelva un numero aleatorio.

const raiz = Math.sqrt(100)
const absoluto = Math.abs(-9)
const random = Math.random()

console.log(raiz)
console.log(absoluto)
console.log(random)

//Nos devuelve: La raiz de 100 que es 10, el producto absoluto de -9 que es 9, y un numero aleatorio, en mi caso 0.17

//EXTRA: Math.round  nos permite redondear al numero entero mas cercano.

//EXTRA math.round, redondea al entero mas cercano. math.floor redondea hacia arriba (favor de la tienda xd) y math.ceil hacia abajo (favor del cliente)
//Y LAS MAYUS OTRA VEZ NDJJFASD

//El modulo es basicamente En mi sistema educativo (México) jamás me explicaron lo que es la operación aritmetica de módulo. Se los dejo:

//Tienes 12 manzanas y dos bolsas que pueden contener hasta 5 manzanas cada una. 
//Si intentas distribuir todas las manzanas en las bolsas, el módulo de esta operación (12 mod 5) o 12 % 5 es 2. 
//Esto significa que después de llenar las dos bolsas, te quedan 2 manzanas que no caben en ninguna de ellas. En resumen, el módulo son esas 2 manzanas extra.
*/



function externo () {
    let variableExterna = 'Soy un string!'

    function interna () {

        console.log(variableExterna)


    }
    return interna;

}

const externoEjemplo = externo()

externo()

//otro ejemplo



function createCounter () {
    let counter = 0
    return function () {
        
        counter++;
    console.log(counter)
        

    }

}

const contadorA = createCounter()
contadorA()
contadorA()

const contadorB = createCounter()
contadorB()
