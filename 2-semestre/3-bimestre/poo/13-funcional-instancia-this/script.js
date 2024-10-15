// Não existe instância na programação funcional, pois não existe classe!
// Tipo, por criarmos uma função que retorna um objeto, essa função já é a própria instância.

function createPerson(name, lastName, age) {
    return {
        name: name,
        lastName: lastName,
        age: age,
        
        // O this continua escrevendo do mesmo jeito, só que dentro do return.
        getFullName() {
            return `${this.name} ${this.lasName}` 
        }
    }
}

// Não existe instância, pois o createPerson é a chamada da função, e não uma new Class!
let person1 = createPerson('John', 'Wick', 90)
let person2 = createPerson('Everson', 'Sousa', 33)

console.log(person1.name)

// Chamando o getFullName
console.log(person1.getFullName())