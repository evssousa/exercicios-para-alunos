const Author = require('./Author')

// Criando o autor
const john = new Author('John Wick')

// Criando uma postagem
const post = john.createPost('As crônicas de John Wick', 'bla bla bla bla')

// Criando comentários
post.addComments('Sopa', 'Eu amo as crônicas do cara aí')
post.addComments('Alan', 'Eu odeio as crônicas desse cara muito feio!')

console.log(john)
console.log(post)