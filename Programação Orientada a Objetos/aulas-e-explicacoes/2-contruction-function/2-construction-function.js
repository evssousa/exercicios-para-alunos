// As funções construtoras que servem como fábricas de objetos.
// As funções contrutoras são escritas em PascalCase.

function Book(title, page, tags, author) {
  // Valores dinâmicos
  this.title = title
  this.page = page
  this.tags = tags
  this.author = author

  // Valores fixos
  this.published = false
  this.inStock = 0

  // Funções
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
}

// Chamar o objeto e criar uma nova instância
const eragon = new Book(
  'Eragon', 
  468, 
  ['Fantasia', 'Aventura'], 
  'Christopher Paolini'
)
console.log(eragon)

const eldest = new Book(
  'Eldest',
  644,
  ['Fantasia', 'Aventura'], 
  'Christopher Paolini'
)
console.log(eldest)