import { Formulario } from './Formulario'
import './Formulario.css'
import { Home } from './Home'
import { Consultas } from './Consultas'
import { useState } from 'react'



function App() {
  const [user, setUser] = useState([])
  return (
    
    <div className="App">
    
    
    <header className="header">Fujikuraauto-cmx</header>
    <div className="container main-content">

    
      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <Home user={user} setUser={setUser} />          
      }
      <Consultas/>
  
    </div>
    
    <footer className="footer">Fujikuraauto-cmx</footer>
    </div>
  )
}
export default App
