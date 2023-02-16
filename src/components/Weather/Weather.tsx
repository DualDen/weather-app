import React, {FC} from 'react';
import {IWeather} from "../../types/WeatherTypes";
import "./Weather.css"

interface WeatherProps {
    weather: IWeather,
    isLoading: boolean,
    error: string | null,
}

const Weather:FC<WeatherProps> = ({weather,isLoading,error}) => {
    console.log(weather)
    return (
        <div className='weather-container'>
            <div className="location">
                <img style={{marginRight: 5}} width="20px" height="20px" src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt=""/>
                {weather.name}
            </div>
            <div className="weather-info">
            <div className="temperature">
                <div className="current-temperature">
                    {`${Math.round(weather.main.temp)}°`}
                </div>
                <div className="temperature-min-max">
                    {`${Math.round(weather.main.temp_max)}°/${Math.round(weather.main.temp_max)}°`}
                </div>
            </div>
                <div className="weather-status">
                    <img style={{marginRight: 8}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                    {weather.weather[0].main}
                </div>
                <div className="weather-main">
                    <div className="humidity">Humidity : {weather.main.humidity} %</div>
                    <div className="pressure">Pressure: {Math.round(weather.main.pressure * 0.750064)}</div>
                    <div className="feels-like">Feels like: {Math.round(weather.main.feels_like)}°</div>
                </div>
                <div className="wind-info">
                    <div className="wind-deg">Wind deg: {weather.wind.deg}°</div>
                    <div className="wind-gust">Wind gust: {weather.wind.gust} m/s</div>
                    <div className="wind-speed">Wind speed: {weather.wind.speed} m/s</div>
                </div>
            </div>
        </div>
    );
};

export default Weather;