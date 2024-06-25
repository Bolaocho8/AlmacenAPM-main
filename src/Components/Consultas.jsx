import "./Consultas.css"


export function Consultas(){
    // Aquí realizarías la petición a tu backend para obtener los datos de la tabla
    return (
        <section className="box">
        <div className="container">
            <h1>Actual</h1>
            <table>
                <thead>
                    <tr>
                        <th>FIFO</th>
                        <th>Cantidad</th>
                        <th>Tarima</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td>615615868686868</td>
                    <td>500</td>
                    <td>156</td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>
    );
}