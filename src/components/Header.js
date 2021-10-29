import React, { useState, useEffect } from 'react'
import CitySelect from './CitySelect'
import UseDateString from '../hooks/UseDateString'
function Header({ onChangeCity }) {
    const [today, setToday] = useState(new Date())

    useEffect(() => {
        const updateTime = setInterval(() => {
            setToday(new Date())
        }, 1000 * 60)

        return (() => clearInterval(updateTime))
    }, [today])
    
    return (
        <header>
            <div className="header-left">
                <div className="logo">Weather Forecast</div>
                <div className="date">{UseDateString(today)}</div>
            </div>
            <CitySelect
            onChangeCity={onChangeCity}
            />
        </header>
    )
}

export default Header
