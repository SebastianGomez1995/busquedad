import React from "react";

export default function SearchBox(props) {

    //funcion que filtra los datos segun el text del input
    const handleSearch = (event) => {
        const searchingFruit = event.target.value.toUpperCase();

        const result = props.data.filter(e => 
            e.fruit.toUpperCase().includes(searchingFruit) 
        );
        props.filterAction(result); 
    };

    return (
        <div className="SearchBox">
            <input 
                type="text"
                onChange={handleSearch}
                placeholder="Escribe tu fruta..."
            />
        </div>
    );
}
