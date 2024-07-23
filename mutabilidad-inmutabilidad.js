//Ejemplo de inmutabilidad

let numero = 37
numero = numero + 20
console.log(numero)

//es inmutable porque al asignarle un valor inicial, no lo declaramos ni cambiamos su valor, si no a que su valor
//original le sumamos algo. se crea un nuevo valor

//Tipos de datos complejo - mutable

let usuario = {nombre: 'Calvin', edad: 17}
usuario.edad = 23
console.log(usuario)

//Ahi si cambia, porque le estamos directamente reasignando un valor a edad, no sumandole o algo asi.

//otro ejemplo con array

let alimentos = ['Naranjas', 'fresas','peras', 'sandias']
alimentos[0] = 'Mangos'
cambiaralimentos(alimentos)
console.log(alimentos)

//el primer numero de todo array no es 1, es 0, ademas notese que para un array hay que usar [], este es otro mutable.

//finalmente, funciones, primero lo hare y luego explico

function cambiarfruta (frutas) {
    frutas.nombre = 'Cerezas'

}

let Frutas = {nombre:'Naranjas', ademas:'example'}
cambiarfruta(Frutas)

console.log(Frutas)

function cambiaralimentos (alimentos) {
    alimentos[2] = 'cerezas'
}

//despues de practicarlo, en resumen, para crear una funcion debemos:
//funcion nombredeloqueharalafuncion (que variable modificara la funcion) { y entre parentesis, indicarle que hara.}



function modificarValor(x) {
    x = x + 1;
    console.log(x); // Dentro de la función: x es modificado (x ahora es 6)
}

let a = 5;
modificarValor(a);
console.log(a); // Fuera de la función: a no se ve afectada (a sigue siendo 5)



