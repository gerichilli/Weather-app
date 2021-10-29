import React, { useState } from 'react'
import { BsSearch as SearchIcon } from "react-icons/bs"

function CitySelect({ onChangeCity }) {
    const [changeCity, setChangeCity] = useState(null)
    const handleCitySubmit = (e) => {
        e.preventDefault();
        onChangeCity(changeCity);
    }

    return (
        <form 
        className="search"
        onSubmit={handleCitySubmit}
        >
            <input 
            type="text" 
            placeholder="Search"
            onChange={(e) => setChangeCity(e.target.value)}
            />
            <SearchIcon className="icon"/>
        </form>
    )
}

export default CitySelect
