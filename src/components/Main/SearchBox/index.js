import React from 'react'

export default function SearchBox (props){
    const handleSubmit = (event) =>{
        event.preventDefault()
        const filteredData = props.data.filter((e) => {
            return e.fruit === event.target.value
        })
        return props.filterAction(filteredData)
    }
        return (
            <div>
                <input 
                    onChange={(e) => handleSubmit(e)}
                />
            </div>
        )
}
