#### PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: até 15/AGO, às 23:59.
# PROJETO 2 – SIMULANDO UM BLOG COM CLASSES

## Ex: Crie uma aplicação em JS que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentáros. As instâncias de Post também devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um métdodo específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado.

```
Exemplo no console do Replit:

<ref *1> Author {
  name: 'John Wick',
  post: [
    Post {
      title: 'Título do post tal',
      content: 'Conteúdo do post tal',
      author: [Circular *1],
      comment: [Array]
    }
  ]
}
<ref *1> Post {
  title: 'Título do post tal',
  content: 'Conteúdo do post tal',
  author: Author { name: 'John Wick', post: [ [Circular *1] ] },
  comment: [
    Comment { author: 'Winston', content: 'Que legal!' },
    Comment { author: 'Frankie', content: 'Você de novo por aqui.' }
  ]
}
```

Boas práticas! :call_me_hand:
