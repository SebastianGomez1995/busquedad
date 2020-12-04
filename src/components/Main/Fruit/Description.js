import React from 'react'

export default function Description (props) {
    return (        
        <div class="Descripcion">
            <h1>{props.fruit}</h1>
            <p class="Color"><b>Color:</b> {props.color}</p>
            <p class="Autor"><span role="img" aria-label="Cámara">📸</span>: {props.author}</p>
        </div>
    )
}