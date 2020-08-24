import React, { Component } from 'react'

export default class SearchBox extends Component {

    state={
        value: ""
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        
        console.log(this.props.data)
        const filteredData = this.props.data.filter((e) => {
            return e.fruit === event.target.value
        })

        return this.props.filter(filteredData)
    }

    render() {
        return (
            <div>
                
                    <input 
                        onChange={(e) => this.handleSubmit(e)}
                    />
            </div>
        )
    }
}
