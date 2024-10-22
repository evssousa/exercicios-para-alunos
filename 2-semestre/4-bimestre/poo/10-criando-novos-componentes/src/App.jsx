import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'

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