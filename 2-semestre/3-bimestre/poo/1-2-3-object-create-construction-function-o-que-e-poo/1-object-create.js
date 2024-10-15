// Revisão objetos no javascript.
// São estruturas no estilo de uma coleção onde podemos armazenar dados no estilo de chave e valor.

// Objeto book
const book = {
  // Propriedades
  // chave: valor
  title: "Eragon",
  page: 468,
  published: true,
  inStock: 20,
  tags: ['Fantasia', 'Aventura', 'Medieval'],
  author: {
    name: 'Christopher Paolini'
  },
  // Métodos
  addOnStock(quantity) {
    // O this (este) informa que ele está querendo puxar algo desse objeto.
    // Uma forma de referênciar o próprio objeto dentro de um método.
    this.inStock += quantity
  },
}

console.log(book)
//console.log(book.title)

// Objeto.Método(Parâmetro)
book.addOnStock(50)
console.log(book.inStock)