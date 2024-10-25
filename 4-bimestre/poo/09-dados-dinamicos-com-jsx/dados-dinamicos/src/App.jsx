export default function App() {
  const ola = 'Olá'
  const mundo = 'mundo!'
  const status = false

  return (
    <div>
      <h1>{ola} {mundo}</h1>
      <h2>É tão fácil quanto 1 + 1 = {sum(1, 1)}</h2>
      <h2>Status, por operador ternário: {status ? 'ON' : 'OFF'}</h2>
    </div>
  )
}

// Demais funções
function sum(a, b) {
  return a + b
}