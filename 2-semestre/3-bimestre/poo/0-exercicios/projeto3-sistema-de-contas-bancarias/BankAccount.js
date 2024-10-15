 class BankAccount {
  #balance
  #accountHolder
  constructor(accountHolder, balance = 0) {
    this.#accountHolder = accountHolder
    this.#balance = balance
  }

  deposit(amount, showLog = true) {
    if (amount > 0) {
      this.#balance += amount
      if (showLog) {
        console.log(`${this.#accountHolder} depositou R$${amount.toFixed(2)} | Saldo total R$${this.getBalance().toFixed(2)}`)
      }
    } else {
      console.log('Valor de depósito inválido.')
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount
      console.log(`${this.#accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R${this.getBalance().toFixed(2)}`)
    } else {
      console.log('Valor de saque inválido ou insuficiente.')
    }
  }

  getBalance() {
    return this.#balance
  }

  getAccountHolder() {
    return this.#accountHolder
  }
}

module.exports = BankAccount