// Exercício 5 
import { useEffect, useState } from 'react'

function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}

function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsuarios(data)
    }
    buscarUsuarios()
  }, []) 

  return (
    <main>
      <h1>Usuários</h1>
      <ListaUsuarios usuarios={usuarios} />
    </main>
  )
}

export default App
