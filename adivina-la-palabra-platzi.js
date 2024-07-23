let palabraOculta = 'python'
let attemps = 3

function verify (palabraOculta, suposicion) {
    if(suposicion.toLowerCase() === palabraOculta) {
       console.log('correctooo!!')
    } else {
        console.log('incorrecto...')
    }
    



}

function startGame () {
    alert('Welcome to this game')
    alert('just guess the word, is a programming lenguage and have 5 letters')
    alert('starts with p')

    while (attemps < 0) {
        let suposicion = prompt('adivina la palabra!!: ')
        if (verificarsuposicion(suposicion,palabraOculta)) {
            alert('correcto, esa es la palabra')
            break
        } else {
            attemps--;
            if (attemps > 0) {
                alert(`incorrect, you still have ${attemps} left `)
            } else {
                alert(`Ya no tienes intentos... la palabra oculta era ${palabraOculta}`)
            }
    
    
    
        }
        

    }


}

startGame()


