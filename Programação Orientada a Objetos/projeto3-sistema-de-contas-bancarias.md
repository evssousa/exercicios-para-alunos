#### PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: até 22/AGO, às 23:59.
# PROJETO 3 – SISTEMA DE CONTAS BANCÁRIAS

## Ex: Crie um sistema em JS de gerenciamento de contas bancárias acompanhando os tópicos abaixo:

1. Crie uma classe 'BankAccount' com:
- Propriedades privadas para 'balance' e 'accountHolder', sendo balance iniciando com 0.
- Um método público 'deposit(amount)' que aumenta o balance.
- Um método público 'withdraw(amount)' que diminui o balance, mas apenas se houver saldo suficiente.
- Um método público 'getBalance()' que retorna o saldo atual.
- Um método público 'getAccountHolder()' que retorna o nome do usuário da conta.

2. Crie uma classe 'SavingsAccount' que herda de 'BankAccount':
- Adicione uma propriedade para a taxa de juros (em porcentagem) chamada 'interestRate'.
- Adicione um método 'applyInterest()' que aumenta o balance com a base da taxa de juros.

3. Em um arquivo 'index.js', crie as instâncias de 'BankAccount' e 'SavingsAccount', e realize algumas operações como depósitos, saques e aplicações de juros.

```
Então, monte a estrutura dessa forma:
/projeto3-sistema-de-contas-bancarias
│
├── BankAccount.js
├── SavingsAccount.js
└── Index.js
```

```
Exemplos do retorno.

John depositou R$500.00 | Saldo total: R$1500.00
John sacou R$300.00 | Saldo total: R$1200.00
========================================================
Saldo total de Mary: R$2000.00 | Aplicado 1.5% de juros         
Novo saldo total: R$2030.00
Mary sacou R$500.00 | Saldo total: R$1530.00
```

⚠️ Dica: Retorno de console.log sempre dentro dos métodos, não utilize o index.js como local de console.

Boas práticas! :call_me_hand:
