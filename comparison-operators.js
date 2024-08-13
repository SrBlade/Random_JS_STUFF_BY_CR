<<<<<<< HEAD
/* operadores de comparacion */
  ==
 //significa que va a comparar si algo es igual a algo, si es true hara una cosa, de ser false hara otra cosa.

 ===
 //este  es de comparasion pura, este es si algo es estrictamente igual a algo (tanto en valor como tipo de dato), hara una cosa. Si es true hara algo, false otra cosa

 //EJEMPLO

 const ejemplo = 14
 const example = '14'

const Ejemplo1 = ejemplo === example
 console.log(Ejemplo1)

 //nos arrojara un false porque no es el mismo tipo de dato, igual si es alrevez.

 !=  //este otro operador es de diferencia

 //Nos dice que si algo es diferente hara una cosa, si no pues otra. Si es diferente nos da TRUE, de ser igual nos da FALSE

!== // Al igual que con ===, este valor de diferencia, valorara la diferencia tanto en el valor, como el tipo de dato.

//EJEMPLOS:

let number = 3
let string = '3'
console.log(number != string) //Nos da false porque aunque son tipos de datos diferentes, tienen el mismo valor. Por lo que no hay diferencia.
console.log(number !== string) //Aca tambien nos da true porque es diferente tanto en valor, como tipo. Por lo que si hay diferencia.

//OTROS OPERADORES//

 > //operador de mayor que: Hara algo mientras el numero sea mayor que nuestra variable.
 >= //si es mayor o igual: Lo mismo que mayor que, pero tambien si es igual a la variable.
 < //Operador menor que: Hara algo mientras nuestro numero sea menor que la variable.
 <= //Menor o igual que: Lo mismo pero tambien si es igual.

//OPERADORES LOGICOS//

 //A diferencia de los operadores de comparacion, en este es comparar no uno, si no si 2 valores son diferentes a otros valores.

 && //llamado 'and', nos dice si este valor, y otro valor, cumplen cierto requisito, haran algo a continuacion. Sencillamente compara 2 exprexiones.
 //EJEMPLO:

 ejemplo && example == Ejemplo1; {
    console.log('Son iguales')
 }

 

 || //Operador 'or', como su nombre lo dice, este nos dice, si un valor O otro valor, tienen esto, Pasara esto otro.

 ejemplo || example == 14; {
   console.log('Son iguales a 14')
 }

 // el *!* se conoce como valor de negacion. Si usamos ! estamos diciendo 'si este valor, no es esto. pasara esto'

 const a = 10
 const b = 20
 const c = '10'

 a == b && a === c //Nos da false, porque a no es igual a b, ni a es igual a c porque el tipo de valor es diferente

 a != b || b > c //Si a es diferente a b, o si b es menor que c. hara algo

=======
/* operadores de comparacion */
  ==
 //significa que va a comparar si algo es igual a algo, si es true hara una cosa, de ser false hara otra cosa.

 ===
 //este  es de comparasion pura, este es si algo es estrictamente igual a algo (tanto en valor como tipo de dato), hara una cosa. Si es true hara algo, false otra cosa

 //EJEMPLO

 const ejemplo = 14
 const example = '14'

const Ejemplo1 = ejemplo === example
 console.log(Ejemplo1)

 //nos arrojara un false porque no es el mismo tipo de dato, igual si es alrevez.

 !=  //este otro operador es de diferencia

 //Nos dice que si algo es diferente hara una cosa, si no pues otra. Si es diferente nos da TRUE, de ser igual nos da FALSE

!== // Al igual que con ===, este valor de diferencia, valorara la diferencia tanto en el valor, como el tipo de dato.

//EJEMPLOS:

let number = 3
let string = '3'
console.log(number != string) //Nos da false porque aunque son tipos de datos diferentes, tienen el mismo valor. Por lo que no hay diferencia.
console.log(number !== string) //Aca tambien nos da true porque es diferente tanto en valor, como tipo. Por lo que si hay diferencia.

//OTROS OPERADORES//

 > //operador de mayor que: Hara algo mientras el numero sea mayor que nuestra variable.
 >= //si es mayor o igual: Lo mismo que mayor que, pero tambien si es igual a la variable.
 < //Operador menor que: Hara algo mientras nuestro numero sea menor que la variable.
 <= //Menor o igual que: Lo mismo pero tambien si es igual.

//OPERADORES LOGICOS//

 //A diferencia de los operadores de comparacion, en este es comparar no uno, si no si 2 valores son diferentes a otros valores.

 && //llamado 'and', nos dice si este valor, y otro valor, cumplen cierto requisito, haran algo a continuacion. Sencillamente compara 2 exprexiones.
 //EJEMPLO:

 ejemplo && example == Ejemplo1; {
    console.log('Son iguales')
 }

 

 || //Operador 'or', como su nombre lo dice, este nos dice, si un valor O otro valor, tienen esto, Pasara esto otro.

 ejemplo || example == 14; {
   console.log('Son iguales a 14')
 }

 // el *!* se conoce como valor de negacion. Si usamos ! estamos diciendo 'si este valor, no es esto. pasara esto'

 const a = 10
 const b = 20
 const c = '10'

 a == b && a === c //Nos da false, porque a no es igual a b, ni a es igual a c porque el tipo de valor es diferente

 a != b || b > c //Si a es diferente a b, o si b es menor que c. hara algo

>>>>>>> 2c5e6ec5c25bd340e440676b10d66c568d12af01
 !(a === c) //aqui nos dara true porque el ! es not. entonces se lee, if a is not equal c, then do something. y a no es igual a c. por eso da true