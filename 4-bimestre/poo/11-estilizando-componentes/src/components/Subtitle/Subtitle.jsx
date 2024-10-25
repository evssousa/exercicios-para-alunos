export default function Subtitle() {
    const status = true

    // 5. também há a possibilidade de adicionar condições no css! Usamos aqui o operador ternário, onde muda a cor dependendo da variável status, fazendo isso uma forma dinâmica!
    return (
        <h2 style={{ color: status ? '#00ff9f' : '#f64348' }}>
            E React é foda!
        </h2>
    )
}