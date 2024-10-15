class Property {
  constructor(area, price) {
    this.area = area
    this.price = price
  }

  // Obter preço por metro quadrado
  getPricePerSquareMeter() {
    return this.price / this.area
  }
}

// House herdará os atributos de Property
class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)

// Adicionando mais coisas em classes herdadas
class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price) // serve para não repetir o this.area, this.price
    this.number = number
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const apt = new Apartment('201', 100, 160000)
console.log(apt)
console.log(apt.getFloor())
console.log(apt.getPricePerSquareMeter())