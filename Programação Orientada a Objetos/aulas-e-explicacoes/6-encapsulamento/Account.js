class Account {
  // Atributos que serão privados!
  #password
  #balance
  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  // Criando método para ver os atributos privados
  getBalance(email, password) {
    //if (this.email === email && this.#password === password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  // Simulando um método privado
  // Com isso, não consigo chamar myAccount.#authenticate, sou forçado a chamar myAccount.getBalance
  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: 'john@email.com',
  password: '1234'
}

const myAccount = new Account(user)
console.log(myAccount)

// Consigo agora trocar as informações
myAccount.password = '8888'
myAccount.balance = 9999
console.log(myAccount)

// Depois de colocado a #, as informações que irão mostrar não são mais informações trocadas, são novas!
myAccount.#password = '7777'
myAccount.#balance = 1111
console.log(myAccount)

// Agora se eu quiser ver o saldo, eu chamo o método getBalance
console.log(myAccount.getBalance('john@email.com', '1234'))