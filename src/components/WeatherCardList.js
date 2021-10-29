import React from 'react'
import WeatherCard from './WeatherCard'
import { BsCalendar2Check as CalendarIcon } from "react-icons/bs";

import UseDateString from '../hooks/UseDateString';

function WeatherCardList({ list }) {
    const renderCards = () => {
        let prevDate
        let isChangeDate = true

        return list.map(card => {
            const [weatherDate, weatherTime] = card.dt_txt.split(" ")

            if(weatherDate === prevDate) {
                isChangeDate = false
                
            } else {
                isChangeDate = true
                prevDate = weatherDate
            }

            return (
                <React.Fragment key={card.dt}>
                    {isChangeDate ? 
                        <h3 className="card-date">
                            <CalendarIcon/> 
                            {UseDateString(new Date(weatherDate), {weekday: 'long'})}, {weatherDate}
                        </h3> : null
                    }
                    <WeatherCard
                        time={weatherTime}
                        icon={card.weather[0].icon}
                        wind={card.wind.speed}
                        humidity={card.main.humidity}
                        temp={card.main.temp}
                    />
                </React.Fragment>
            )
        })
    }

    return (
        <>
            <div className="card-list">
                {renderCards()}
            </div>
        </>
    )
}

export default WeatherCardList
