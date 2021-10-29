import React from 'react'
import { BiDroplet as HumidityIcon } from "react-icons/bi";
import { BiWind as WindIcon } from "react-icons/bi";
import { BsClock as ClockIcon } from "react-icons/bs";
import UseCelsius from "../hooks/UseCelsius";

function WeatherCard({ time, icon, wind, humidity, temp }) {
    return (
        <div className="card">
            <div className="card-title">
                <ClockIcon /> {time}
            </div>
            <div className="card-weather-icon">
                <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="rain"></img>
            </div>
            <div className="card-info">
                <div className="wind">
                    <WindIcon className="icon"/>
                    <span>{wind.toFixed(2)} m/s</span>
                </div>
                <div className="humidity">
                    <HumidityIcon className="icon"/>
                    <span>{humidity}%</span>
                </div>
            </div>
            <div className="card-degree">{UseCelsius(temp)}&#176;</div>
            
        </div>
    )
}

export default WeatherCard
