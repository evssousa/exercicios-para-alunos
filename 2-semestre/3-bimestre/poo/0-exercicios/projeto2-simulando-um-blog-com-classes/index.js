const Author = require('./Author')

// Criando um autor
const john = new Author('John Wick')

// Criando uma postagem do autor
const post = john.createPost('Título do post tal', 'Conteúdo do post tal')

// Criando os comentários no post do autor
post.addComment('Winston', 'Que legal!')
post.addComment('Frankie', 'Você de novo por aqui.')

console.log(john)
console.log(post)