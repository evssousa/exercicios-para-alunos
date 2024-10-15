class Person {
  // transformando uma variável estática.
  // isso significa que ela está associada a Person, mas ela não tá associada ao objeto ou as instâncias criadas.
  static hands = 2
  age = 0
  constructor(name) {
    this.name = name
  }
  
  sayHi() {
    // console.log(`Oi, eu sou ${this.name} e tenho ${this.hands} mãos.`)
    // irá aparecer "undefined" indicando que não existe this.hands.

    // para acessar o static hands, deve-se fazer da seguinte forma:
    console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`)
  }

  // também podemos criar métodos estáticos, que não precisaremos criar uma instância para chamá-los.
  static hello() {
    console.log('Olá mundo!')
  }
}

const p1 = new Person('John')
// Person.hands = 3
p1.sayHi()

// quando se chama Person.hands, o valor irá mudar para todas as instâncias, por que ela referência para toda a classe Person, e não suas instâncias individualmente, diferentemente quando usavamos antes do static, que chamariamos p1.hands para mudar somente o valor de p1.

// podemos chamar o método estático static hello() sem precisar criar uma instância.
Person.hello()

// se chamarmos dessa forma, dará erro "is not a function".
// p1.hello()