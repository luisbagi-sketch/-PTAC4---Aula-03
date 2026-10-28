// Exercício 4 
import { useEffect, useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    async function buscarUsuario() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
      const data = await response.json()
      setUsuario(data)
    }
    buscarUsuario()
  }, [])

  if (usuario === null) {
    return <p>Carregando...</p>
  }

  return (
    <main>
      <h1>{usuario.name}</h1>
      <p>{usuario.email}</p>
    </main>
  )
}

export default App
