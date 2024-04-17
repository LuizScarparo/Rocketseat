const frasesBiscoitoDaSorte = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "O riso é a menor distância entre duas pessoas.",
    "Acredite em milagres, mas não dependa deles.",
    "Você é do tamanho do seu sonho.",
    "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
    "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
    "Siga os bons e aprenda com eles.",
    "Acreditar que é possível já é meio caminho andado.",
    "Lembre-se: amigo é aquele que sabe tudo a seu respeito e, mesmo assim, ainda gosta de você."
];

const firstPage = document.querySelector('.firstPage')
const secondPage = document.querySelector('.secondPage')
const phrase = document.querySelector('.secondPage')

firstPage.addEventListener('click', toggleScreen)
firstPage.addEventListener('click', changeText)
document.addEventListener('keydown', enter)
button.addEventListener('click', backFirstPage)


function toggleScreen() {
    firstPage.classList.toggle('hide')
    secondPage.classList.toggle('hide')
}

function changeText() {
    phrase.querySelector('.secondPage p').innerText = `${frasesBiscoitoDaSorte[Math.floor(Math.random() * 10)]}`
}

function enter(e) {
    if (e.key == 'Enter' && firstPage.classList.contains('hide')) {
        toggleScreen()
    }
}

function backFirstPage() {
    toggleScreen()
}

//animação das imagens feita com o chatgpt

const imagem = document.getElementById("imagem1");

imagem.addEventListener("mouseover", function() {
    imagem.classList.add("tremendo");
});

imagem.addEventListener("mouseout", function() {
    imagem.classList.remove("tremendo");
});

