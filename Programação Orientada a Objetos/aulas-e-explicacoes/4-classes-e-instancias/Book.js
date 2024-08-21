/**
 * OBS: Escrevemos o nome dos arquivos com o nome da classe que iremos criar.
 */

// Criação de uma classe
class Book {
  // Método constructor será o método onde iremos guardar as propriedades da classe.
  constructor(title) {
    this.title = title
    this.published = false
  }

  // Criando um método para alterar o this.published
  publish() {
    this.published = true
    console.log(`O livro agora está publicado: ${this.published}`)
  }
}

const eragon = new Book('Eragon')
const eldest = new Book('Eldest')

// Chamando a variável eragon/eldest que está instanciado o Book e buscando o método publish para alterar para true.
eragon.publish()
eldest.publish()