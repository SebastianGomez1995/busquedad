import React, { useState, useEffect } from 'react'
import Fruit from './Fruit';
import SearchBox from './SearchBox';

export default function Main () {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [hasError, setErrors] = useState(false)

    useEffect(() => {
        async function fetchData(){
            const res = await fetch('./fruits.json')
            res.json()
            .then(data =>  setData(data))    
            .catch(err => setErrors(err))
        }
        fetchData();
    })

    const lookForAFruit = (text) => {
           return setFilteredData(text)
    }

    return (
        <div>
            <SearchBox data={data} filterAction={lookForAFruit}/>
            <Fruit data={filteredData.length !== 0 ? filteredData : data} />
            <span>¿Hubo errores? {hasError ? hasError : "No"}</span>
        </div>
    )
}


