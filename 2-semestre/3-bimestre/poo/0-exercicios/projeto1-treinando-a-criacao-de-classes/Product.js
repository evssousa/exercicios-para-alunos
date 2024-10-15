// - Product, que deverá possuir:
//   - um atributo name, atribuível na instanciação;
//   - um atributo description, atribuível na instanciação;
//   - um atributo price, atribuível na instanciação;
//   - um atributo inStock, inicializado sempre em 0;
//   - um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock;
//   - um método calculateDiscount, que tem como parâmetro a porcentagem de desconto a ser aplicado e retorne o valor do preço com o desconto aplicado;

/* Exemplo no console:
Nome do produto: Notebook
Descrição do produto: Notebook Nitro 5
Valor do produto: R$1000.00
Quantidade no estoque: 10

==================================
Desconto no produto: 5%
Novo valor do produto: R$950.00
*/

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
      Quantidade no estoque: ${this.inStock}
    `)
  }

  calculateDiscount(discount) {
    this.price = this.price - (discount * this.price / 100)
    console.log(`
      ==================================
      Desconto no produto: ${discount}%
      Novo valor do produto: R$${this.price.toFixed(2)}
    `)
  }
}

const notebook = new Product('Notebook', 'Notebook Nitro 5', 1000)
notebook.addToStock(10)
notebook.calculateDiscount(5)