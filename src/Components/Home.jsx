import { Calculadora } from './Calculadora'
import "bootstrap/dist/css/bootstrap.min.css";

export function Home ({ user, setUser }) {
    const handleLogout = () => {
        setUser([])
    }
    return (        
        <div>
            <h1 class="display-1">Bienvenido {user}</h1>
            <Calculadora />
            <button type="button" class="btn btn-secondary btn-lg" onClick={handleLogout}>Cerrar sesion</button>
        </div>
    );
}
