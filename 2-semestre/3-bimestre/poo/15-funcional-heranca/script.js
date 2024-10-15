const defaultUser = {
    name: '',
    email: '',
    level: 1
}

// Temos dois tipos e usuários no sistema. O comum e o admin
let normalUser = {
    ...defaultUser, // herda todo o objeto defaultUser. Isso se chama spread!
    name: 'John',
    email: 'john@email.com'
}

let adminUser = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'admin@boladao.com',
    level: 2
}