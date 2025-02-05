import React from 'react'
import Img from "react-cool-img";

export default function Photo (props) {
        return (
        <div class="Foto">
            <figure>
                <Img 
                    src={props.img} 
                    cache
                    width='100px'
                    debounce={1000}
                    alt={props.img}
                />
            </figure>
        </div>
    )
}

