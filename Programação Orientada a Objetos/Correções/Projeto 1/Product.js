class Product {
  constructor(name, description, price) {
      this.name = name
      this.description = description
      this.price = price
      this.inStock = 0
  }

  addToStock(quantity) {
      this.inStock += quantity
      console.log(`
          Nome do produto: ${this.name}
          Descrição do produto: ${this.description}
          Valor do produto: R$${this.price.toFixed(2)}
          Quantidade do produto: ${this.inStock}
      `)
  }

  calculateDiscount(discount) {
      this.price = this.price - (discount * this.price / 100)
      console.log(`
          ===========================
          Desconto no produto: ${discount}%
          Novo valor do produto: ${this.price.toFixed(2)}
      `)
  }
}

const notebook = new Product('Notebook', 'Notebook Nitro 5', 1000)
notebook.addToStock(10)
notebook.calculateDiscount(5)
