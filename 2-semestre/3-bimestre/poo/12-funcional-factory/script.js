// Programação Orientada a Objeto
// Exemplo de um objeto
let person = {
    name: 'John',
    lasName: 'Wick',
    age: 90
}

// Caso eu queira criar outra pessoa, teria que repetir o código acima...
let person2 = {
    name: 'Everson',
    lasName: 'Sousa',
    age: 33
}

// ==============================
// Utilizando conceito de Factory.
// Cria uma função para "criar", nesse caso, pessoas.
// Criamos uma função com inicio "create", indicando que será um "fábrica", ou seja, um factory, que irá criar alguma coisa.
function createPerson(name, lastName, age) {
    return {
        name: name,
        lastName: lastName,
        age: age
    }
}

let person3 = createPerson('John', 'Wick', 90)
let person4 = createPerson('Everson', 'Sousa', 33)

console.log(person3.name)

// Agora eu tenho um objeto padronizado!