// criando um componente. Componente é uma função no javascript
// deve ser escrito em pascal case, por boa prática
function Button() {
    return <button>Meu botão</button>
}

function Conteiner() {
    return (
        // detalhes que os atributos mudam um pouco, já que acaba sendo javascript, mesmo sendo uma sintaxe parecida com HTML
        <div className="">
            <h1></h1>
            <p></p>
        </div>
    )
}