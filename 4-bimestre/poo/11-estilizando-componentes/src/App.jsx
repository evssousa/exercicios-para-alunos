import Title from './components/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Paragraph from './components/Paragraph'

// 3. terceira forma é criando o CSS inline. Lembrando que isso é Javascript, mas muito parecido com CSS!
export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#2d2d2d',
        display: 'grid',
        minHeight: '100vh',
        placeContent: 'center',
        textAlign: 'center'
      }}
    >
      <Title />
      <Subtitle />
      <Paragraph />
    </div>
  )
}