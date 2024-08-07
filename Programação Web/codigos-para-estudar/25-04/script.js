// VARIAVEIS
const iceWhite = '#f1f5f9'
const darkBlack = '#212529'

// FUNÇÕES
function useLightTheme() {
    document.body.style.backgroundColor = iceWhite
    document.body.style.color = darkBlack
}

function useDarkTheme() {
    document.body.style.backgroundColor = darkBlack
    document.body.style.color = iceWhite
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

// ADICIONANDO OS EVENTOS
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)