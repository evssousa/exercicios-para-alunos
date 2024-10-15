// - User, que deverá possuir:
//   - um atributo fullname, atribuível na instanciação;
//   - um atributo email, atribuível na instanciação;
//   - um atributo password, atribuível na instanciação;
//   - um método login, que tem como parâmetro um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não;

/* Exemplo do console:
John: Login sucess!
ou
John: Login failed!
*/

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email == email && this.password == password) {
      console.log(this.fullname + ': Login sucess!')
    } else {
      console.log(this.fullname + ': Login failed!')
    }
  }
}

const john = new User('John', 'admin@email.com', 1234)
john.login('admin@email.com', 1234)