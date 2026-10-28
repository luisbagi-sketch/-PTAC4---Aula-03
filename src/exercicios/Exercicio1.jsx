// Exercício 1 
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function buscarPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    buscarPosts()
  }, [])

  return (
    <main>
      <h1>Posts (10 primeiros)</h1>
      <ul>
        {/* a API devolve 100 posts, slice(0, 10) pega só os 10 primeiros */}
        {posts.slice(0, 10).map(p => (
          <li key={p.id}>
            {p.id} — {p.title}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
