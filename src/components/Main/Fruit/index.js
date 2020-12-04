import React from 'react';
import Description from './Description';
import Photo from './Photo';

export default function Fruit(props) {
        return (
            <>
            {props.data.map((e, i) => {
                return(
                    <div key={i} class="Fruta">
                        <Photo img={e.img} author={e.imgAuthor} />
                        <Description fruit={e.fruit} color={e.color} author={e.imgAuthor} />
                    </div>
                    )
                })}
            </>
        )
}