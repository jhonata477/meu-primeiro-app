
import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="container">
      <h1>Meu Primeiro App</h1>

      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Adicionar
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Diminuir
      </button>

      <button onClick={() => setContador(0)}>
        Zerar
      </button>
    </div>
  )
}

export default App
