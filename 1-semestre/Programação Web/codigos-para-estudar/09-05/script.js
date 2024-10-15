// == TEMPLATE LITERALS ======================
const nome = 'John'
const sobrenome = 'Wick'

console.log(nome + ' ' + sobrenome)

// Forma antiga utilizando o método de concatenação e o \n para quebrar linha
console.log('Seu nome é: \n ' + nome + ' ' + sobrenome)

// Forma nova utilizando a crase e fazendo quebra de linha
console.log(`
    Seu nome é: ${nome} ${sobrenome}
    Tudo bem?
    A aula tá muito fácil
`)

// == TIPOS DE FUNÇÕES ===============================
//Função Normal
function normal(a, b) {
    return a + b
}
console.log(`A soma é: ${normal(2, 3)}`)

// Função Anônima
const anonima = function (a, b) {
    return a + b
}
console.log(`A soma é: ${anonima(1, 3)}`)

// Arrow Function
const arrow = (a, b) => {
    return a + b
}
console.log(`A soma é: ${arrow(5, 6)}`)
// Arrow Function sem return
const subtr = (a, b) => a - b
console.log(subtr(2, 1))

// == OPERADOR SPREAD ========================
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta']
towns.pop()
towns.push('Geffen')
console.log(towns)

const cloneTowns = [...towns]
cloneTowns.push('Alberta')
console.log(cloneTowns)

console.log(towns)

// console.log(...towns)
// console.log(...towns[0])

// const fruit = 'Maçã'
// console.log(...fruit)

