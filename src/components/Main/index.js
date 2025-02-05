import React, { useState, useEffect } from 'react'
import Fruit from './Fruit';
import SearchBox from './SearchBox';

export default function Main () {
    //creacion de los estados para controlar los datos recibidos y filtrados
    const [data, setData] = useState([]) 
    const [filteredData, setFilteredData] = useState([])

    //funcion que lee los datos de un .json
    const fetchData = async (path) => {
        const res = await fetch(path)
        const json = await res.json()
        setData(json)
    }
    
    //actualiza los datos filtrados segun el texto ingresado
    const lookForAFruit = (text) => {
        setFilteredData(text)
        return filteredData
 }

    useEffect(() => {
        fetchData('./fruits.json'); 
    }, [])

    return (
        <div id="Contenido">
            <SearchBox data={data} filterAction={lookForAFruit}/>
            <div id="Frutas">
                <Fruit data={filteredData.length !== 0 ? filteredData : data} />
            </div>
        </div>
    )
}