class Person {
    #age = 10
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  
    // Os getters irão criar algo parecido com uma função e então você poderá usar como se fosse uma variável.
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    // Get também poderá pegar as informações de propriedades privadas.
    get age() {
      return this.#age
    }
  
    // Enquanto get você irá "pegar" alguma coisa, o set você irá "enviar" alguma coisa. Os setters sempre terão que possuir um parâmetro.
    set age(x) {
      // typeof é uma forma de verificação.
      if (typeof x === 'number') {
        this.#age = x
      }
    }
  }
  
  const p1 = new Person('John', 'Wick')
  
  // Usando os setters como se fosse variável, enviando um número 20.
  p1.age = 20
  // Usando os getters como se fosse uma variável, mostrando o return.
  console.log(`${p1.fullName} tem ${p1.age} anos.`)
  
  // Os getters e setters são uma prática para "burlar" o encapsulamento. É simplesmente uma forma diferente de verificar os valores das propriedades privadas. No lugar de se fazer uma função, você pode usar get ou set para usar como se fosse uma variável.