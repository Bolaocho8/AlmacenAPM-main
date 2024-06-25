import "./Formulario.css"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import FAA_logo from './image/FAA_logo.png';


export function Formulario({ setUser }){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSumit = (e) => {
        e.preventDefault()
        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }
    return(
        
        <section className="box">
            <img className="img" src={FAA_logo}/>
            <h1 class="display-1">Entradas</h1>
            <form 
                className="formulario"
                onSubmit={handleSumit}
                >
                <label className="Label" for="name">Tarima</label>
                <input
                    className="Label"
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
                <label className="Label" for="pwd">FIFO</label>
                <input
                    className="Label" 
                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)} 
                    />
                
                <button className="Button">Guardar</button>
            </form>
            {error && <p class="text-danger"><mark>Todos los campos son obligatorios<mark/></mark></p>}
        </section>
    )
}