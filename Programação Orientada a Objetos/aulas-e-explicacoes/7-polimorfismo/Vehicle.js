// Classe mãe
class Vehicle {
  move() {
    console.log('O veículo está se movendo.')
  }
}

// Classes filhas
class Car extends Vehicle {
  // Utilizando o mesmo método da classe mãe, mas sobrescrevendo
  move() {
    console.log('O carro está se movendo.')
  }
}

class Ship extends Vehicle {
  move() {
    console.log('O navio está navegando.')
  }
}

class Aircraft extends Vehicle {
  // É possível sobrescrever o método da classe mãe e ainda utilizar parâmetros para a classe individualmente
  move(speed) {
    console.log(`A aeronave está voando a ${speed}km/h.`)
  }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(80)
