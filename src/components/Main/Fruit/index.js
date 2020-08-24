import React, { Component } from 'react';
import Description from './Description';
import Photo from './Photo';

export default class Fruit extends Component {
    render() {
        return (
            <>
            {this.props.data.map((e) => {
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
}
