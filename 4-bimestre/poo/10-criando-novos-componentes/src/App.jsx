// 3. criando o novo arquivo, precisamos importar
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'

// 1. criando novos componentes
function Title() {
  const tech = 'Javascript'
  return <h1>{tech} é show!</h1>
}

// 2. Mas por boa prática, cada componente é criado separadamente!

export default function App() {
  return (
    <div>
      <Title />
      <Subtitle />
      <Paragraph />
    </div>
  )
}

// 4. agora por boa prática, iremos mover os arquivos para uma pasta componentes!