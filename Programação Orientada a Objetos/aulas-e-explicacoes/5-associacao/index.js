const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('Rua Elisa Sampaio', 479, 'Centro', 'Paramoti', 'CE')
const john = new Person('John', addr)

console.log(john)
console.log(john.address.fullAddress())