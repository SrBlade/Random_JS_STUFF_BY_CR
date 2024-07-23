//a la hora de hacer booleans, lo correcto es que a sus variables la hagamos de tipo question

const isActive = true
const notActive = false
const haspermisson = true

//javascript puede convertir booleans de manera implicita y explicita. implicita es que lo hace el por nosotros, for example

const implicit = 5 > 3
//the result here is going to be TRUE, and there is not a visible boolean

//si queremos saber si una variable tiene un valor, usamos !!

const name = 'CalvinR'
console.log(!!name)

//and is true

//la forma explicita, es que nosotros directamente a js le decimos que lo convierta

const explicit = 0
const isexplicit = Boolean(explicit)
console.log(isexplicit)

//cabe destacar, js convierte el 0 a false y el resto de numero a true, [porque? pues ni idea]

//ademas, con !! le estamos diciendo a la variable Boolean sin unsar Boolean directamente.