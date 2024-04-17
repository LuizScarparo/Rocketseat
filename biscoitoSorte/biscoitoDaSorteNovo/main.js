const closedCookie = document.querySelector('#closedCookie')

const firstWrapper = document.querySelector('.firstWrapper')
const secondWrapper = document.querySelector('.secondWrapper')
const buttonReset = document.querySelector('.buttonReset')

const frasesInspiradoras = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Se alguém não tem mais forças para te oferecer luz, ilumina-lhe o caminho com a tua.",
    "Quando alguém não consegue encontrar a paz, oferece-lhe a tranquilidade do teu espírito.",
    "Se alguém está tão sobrecarregado que não pode te oferecer palavras de conforto, fala por ele com tua calma.",
    "alo galerinha do mal"
];

let indexFrasesInspiradoras = Math.floor(Math.random() * frasesInspiradoras.length)
console.log(indexFrasesInspiradoras)


cookieClicker = (event) => {
    event.preventDefault()
    toogleWrapper()
    toogleText()
}

buttonResetClick = (event) => {
    event.preventDefault()
    indexFrasesInspiradoras = Math.floor(Math.random() * frasesInspiradoras.length)
    toogleText()
    toogleWrapper()

}

toogleWrapper = () => {
    firstWrapper.classList.toggle('hide')
    secondWrapper.classList.toggle('hide')
}

toogleText = () => {
    secondWrapper.querySelector('p').innerText = `${frasesInspiradoras[indexFrasesInspiradoras]}`
}

closedCookie.addEventListener('click', cookieClicker)
buttonReset.addEventListener('click', buttonResetClick)
