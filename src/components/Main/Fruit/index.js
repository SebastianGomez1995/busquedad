import React from 'react';
import Description from './Description';
import Photo from './Photo';

export default function Fruit(props) {
        return (
            <>
            {props.data.map((e) => {
                return(
                    <div>
                        <Photo img={e.img} author={e.imgAuthor} />
                        <Description fruit={e.fruit} />
                    </div>
                    )
                })}
            </>
        )
}