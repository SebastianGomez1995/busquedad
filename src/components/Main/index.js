import React, { useState, useEffect } from 'react'
import Fruit from './Fruit';
import SearchBox from './SearchBox';

export default function Main () {
    const [data, setData] = useState([]) 
    const [filteredData, setFilteredData] = useState([])

    const fetchData = async (path) => {
        const res = await fetch(path)
        const json = await res.json()
        setData(json)
    }
    
    const lookForAFruit = (text) => {
        return setFilteredData(text)
 }

    useEffect(() => {
        fetchData('./fruits.json'); 
    }, [filteredData])

    return (
        <div id="Contenido">
            <SearchBox data={data} filterAction={lookForAFruit}/>
            <div id="Frutas">
                <Fruit data={filteredData.length !== 0 ? filteredData : data} />
            </div>
        </div>
    )
}