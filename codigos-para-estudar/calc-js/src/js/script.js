const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = [
    '(', ')', '/', '*', '+', '-', '.', '%',
    '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ' '
]

// Passa por todos os botões e adiciona a função de click
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        // Atribui o valor anterior e soma com o valor atual
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

// Função de apagar dados
document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

// Função dos botões do teclado
// Será possível utilizar o teclado direto no input para calcular
input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    // Se a tecla estiver inclusa no array allowedKeys
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    // Se a tecla for backspace
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    // Se a tecla for enter
    if (ev.key === 'Enter') {
        calculate()
    }
})

// Função de calcular - ou quando clicar nos botões = ou enter.
document.getElementById('equal').addEventListener('click', calculate)
function calculate() {
    // adiciona uma class 'error'
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    // calcula os valores do input
    const result = eval(input.value)
    resultInput.value = result
    // remove a class 'error'
    resultInput.classList.remove('error')
}

// Função do botão copiar
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    // Aciona uma ação no botão selecionado
    const button = ev.currentTarget
    // Se o botão que foi selecionado para executar uma ação tiver em seu texto 'Copy'
    if (button.innerText === 'Copy') {
        button.innerText == 'Copied!'
        button.classList.add('success')
        // Acionar o método de copiar - navigator.clipboard.whiteText() - e copiar o resultado do resultInput
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

// Função do botão de tema
document.getElementById('themeSwitcher').addEventListener('click', function () {
    // Se o tema estiver como dark, troca para as cores do tema claro
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    // Se o tema estiver como light, troca as cores para o tema escuro
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})