// Exercício 2 
import { useEffect, useState } from 'react'

function App() {
  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    async function buscarComentarios() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      const data = await response.json()
      setComentarios(data)
    }
    buscarComentarios()
  }, [])

  return (
    <main>
      <h1>Comentários do post 1</h1>
      <ul>
        {comentarios.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong> — {c.email}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
