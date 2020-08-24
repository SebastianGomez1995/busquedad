import React, { Component } from 'react'
import Img from "react-cool-img";

export default class Photo extends Component {

    render() {
        return (
                        <div>
                            <figure>
                                <Img 
                                    src={this.props.img} 
                                    cache
                                    width='100px'
                                    height='100px'
                                    debounce={1000} // Default is 300 (ms)
                                    alt={this.props.img}
                                />
                            </figure>
                        </div>
            )
        }   
    }
