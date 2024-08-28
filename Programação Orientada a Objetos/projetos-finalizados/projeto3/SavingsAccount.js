const BankAccount = require('./BankAccount')

class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance, interestRate) {
        super(accountHolder, balance)
        this.interestRate = interestRate
    }

    applyInterest() {
        const previousBalance = this.getBalance()
        const interest = previousBalance * (this.interestRate / 100)
        this.deposit(interest, false)
        console.log(`Saldo total ${this.getAccountHolder()}: R$${previousBalance.toFixed(2)} | Aplicado ${this.interestRate}% de juros \nNovo saldo total: R$${this.getBalance().toFixed(2)}`)
    }
}

module.exports = SavingsAccount