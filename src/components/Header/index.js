import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className="App-header">
            <h1>Catálogo de Frutas</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/notas">Notas</Link>
                </li>
            </ul>
            
        </header>
    )
}
