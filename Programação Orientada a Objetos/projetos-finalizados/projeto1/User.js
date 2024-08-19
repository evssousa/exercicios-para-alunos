class User {
  constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
  }

  login(email, password) {
      if (this.email === email && this.password === password) {
          console.log(`${this.fullname}: Login sucess!`)
      } else {
          console.log(`${this.fullname}: Login failed!`)
      }
  }
}

// Credenciais cadastradas
const john = new User('John', 'john@email.com', '1234')

// Usuário digitando
john.login('john@email.com', '1234')
