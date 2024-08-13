const usuarios = [
    {
        username: 'SrBlade',
        password: '2325'
    },
    {
        username: 'Calvin',
        password: '2006'


    },

    {
        username: 'Rafael',
        password: '123'
    },
    {
        username: 'Xavier',
        password: '2032'


    }

]






const timeline = [
    {
        username: 'James',
        timeline: 'Las cosas como son'

    },

    {
        username: 'Calvin',
        timeline: 'Toy jalto'

    },

    {
        username: 'Rafa',
        timeline: 'Baneen al admin'

    },

    {
        username: 'chris',
        timeline: 'random text here'

    },



]


/*let timelineRandom = parseInt(Math.floor(Math.random() * timeline.length))
let showNames = timeline.forEach(dato => Math.random(console.log(dato)))


function check () {

    const usuario = prompt('Cual es tu usuario?')
    const userPassword = prompt('Cual es tu contrasena?')

    const checkUser = usuarios.find(user => user.username === usuario && user.password === userPassword)

    if (checkUser) {
    alert('inicio exitoso')
    

    } else  {
    alert('hubo un error')
    console.log(showNames)
    }




}

check()*/


let usuario = prompt('Cual es tu usuario?')
let userPassword = prompt('cual es tu contrasena')

function check(usuario, userPassword) {

for(let i = 0; i < usuarios.length; i++) {

    if(usuarios[i].username === usuario && usuarios[i].password === userPassword) {
        return true
    } 
    

}
    return false
}


function iniciarSesion(usuario, userPassword) {

if (check(usuario, userPassword) ) {
    alert(`Bienvenido ${usuario}`)
    console.log(timeline)

} else {
    alert(`chequea papa, que hubo un error.`)
}




}

iniciarSesion(usuario, userPassword)



