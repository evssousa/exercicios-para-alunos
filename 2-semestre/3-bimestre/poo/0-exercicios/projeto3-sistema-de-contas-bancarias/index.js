const BankAccount = require('./BankAccount')
const SavingsAccount = require('./SavingsAccount')

const account1 = new BankAccount('John', 1000)
const savingsAccount1 = new SavingsAccount('Mary', 2000, 1.5)

account1.deposit(500)
account1.withdraw(300)

console.log('==========================================================')

savingsAccount1.applyInterest()
savingsAccount1.withdraw(500)