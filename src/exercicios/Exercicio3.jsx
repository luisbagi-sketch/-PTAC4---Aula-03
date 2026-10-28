// Exercício 3 
import { useEffect, useState } from 'react'

function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      const response = await fetch('https://reqres.in/api/users?page=2')
      const data = await response.json()
      setUsuarios(data.data) // atenção: reqres devolve { data: [...] }
    }
    buscarUsuarios()
  }, [])

  return (
    <main>
      <h1>Usuários (página 2)</h1>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>
            {u.first_name} {u.last_name} — {u.email}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
