import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className="App-header">
            <h1>Catálogo de Frutas</h1>
            <p>Fundamentos de React Hooks<span> - @<a href="https://twitter.com/@mikenieva">mikenieva</a></span></p>
            <ul>
                <li>
                    <Link to="/"><u>Inicio</u></Link>
                </li>
                <li>
                    <Link to="/notas"><u>Notas</u></Link>
                </li>
            </ul>
            
        </header>
    )
}
