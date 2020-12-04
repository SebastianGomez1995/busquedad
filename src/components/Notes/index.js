import React from 'react'
import Img from "react-cool-img";
import ProjectIMG from './../../img/proyecto.gif'

export default function Notes () {
    return (
        <div className="Notas">
            <h1>¿Qué vamos a desarrollar?</h1>
            <p>¡Hola!</p>
            <p>Esta sección incluirá los recursos, explicación de conceptos y las respuestas de cada sección, para que puedas ir comparando tu código.</p>
            <h3>Recursos</h3>
            <ul>
                <li><span role="img" aria-label="Docs">📄</span> <a href="https://github.com/mikenieva" target="_blank" rel="noopener noreferrer">
                    GitHub Repo</a>
                </li>
                <li><span role="img" aria-label="Rocket">🚀 </span><a href="https://hooks.mikenieva.com" target="_blank" rel="noopener noreferrer">
                    Demo</a></li>
            </ul>

            <h3>Índice</h3>
            <ul>
                <li>El proyecto</li>
                <li>¿Qué son los Hooks?</li>
            </ul>

            <h3>Respuestas</h3>
            <ul>
                <li>Tarea 1</li>
                <p></p>
                <li>Tarea 2</li>
                <li>Tarea 3</li>
                <li>Tarea 4</li>
                <li>Tarea 5</li>
                <li>Tarea 6</li>
                </ul>
            
            <h2>El proyecto</h2>
            <p>En la siguiente imagen, te muestro lo que vamos a desarrollar. Será una aplicación muy sencilla de búsqueda.</p> 
            <p>Se filtrará un archivo .json, que es un catálogo de frutas, y encontrará la fruta deseada.</p>
            <p>Puedes echarle un vistazo a la demostración en el índice.</p>
            <Img 
                    src={ProjectIMG}
                    cache
                    width='350px'
                    debounce={1000}
                />
            <h2>¿Qué son los Hooks?</h2>
            <p>React, en sus inicios, tenía dos formas de construir componentes.</p>
            <ul>
                <li>“Componentes funcionales”</li>
                <li>“Componentes de clase”</li>
            </ul>
            <p>Los componentes funcionales eran más ligeros. Sin embargo, <b>no podías gestionar estados ni manejar ciclos de vida dentro de ellos.</b> Es decir, no contabas con efectos secundarios (como utilizar un API externa, por ejemplo).</p>
            <p>Si tú necesitabas usar estos efectos, era necesario usar los componentes de clase.</p> 
            <p>Eran más largos en sintaxis, claro, pero te permitían hacerlo.</p>
            <p>Si por alguna razón, avanzando con tu aplicación de React, eligieras un componente funcional y te dieras cuenta que necesitas estos efectos, debías trabajar en una refactorización hacia los componentes de clase. 
            </p>
            <p>Esto podría ser desde muy complejo en aplicaciones grandes. Por esto y más, tener una estrategia de componentes clara era muy importante desde el inicio.
            </p>
            <p>Y este era el problema. </p>
            <p>Con este escenario, en React 16.8, en esta versión, se propusieron los “Hooks”. </p>
            <p>Los Hooks son funciones que agregan características de “gestión de estado” y un mejor manejo de efectos adversos o secundarios, dentro de un componente funcional. Es decir, todo lo que podía hacer el componente de clase, ahora sí, lo puede hacer el componente funcional. </p>
            <p>La ventaja principal de escribir componentes funcionales  es que es menos código, la sintaxis es mucho más limpia y en algunas indicaciones del equipo de React, se observa una ligera mejora en el desempeño de la aplicación (muy ligera realmente). Otro beneficio, es que realizar “Testing” es mucho más claro y organizado.
            </p>
           <p>Si por alguna razón, avanzando con tu aplicación de React, eligieras un componente funcional y te dieras cuenta que necesitas estos efectos, debías trabajar en una refactorización hacia los componentes de clase. Esto podría ser desde muy complejo en aplicaciones grandes. Por esto y más, tener una estrategia de componentes clara era muy importante desde el inicio.
           </p>
            <p>Y este era el problema.</p>
            <p>Con este escenario, en React 16.8, se propusieron los “Hooks”.</p>
            <p>Los Hooks son funciones que agregan características de “gestión de estado” y un mejor manejo de efectos adversos o secundarios, dentro de un componente funcional. Es decir, todo lo que podía hacer el componente de clase, ahora sí, lo puede hacer el componente funcional.
            </p>
            <p>La ventaja principal de escribir componentes funcionales  es que es menos código, la sintaxis es mucho más limpia y en algunas indicaciones del equipo de React, se observa una ligera mejora en el desempeño de la aplicación (muy ligera realmente).
            </p>
            <p>Otro beneficio, es que realizar “Testing” es mucho más claro y organizado.</p>
            <h2>Tarea 1</h2>
            <h2>Tarea 2</h2>
            <h2>Tarea 3</h2>
            <h2>Tarea 4</h2>
            <h2>Tarea 5</h2>
        </div>
    )
}
