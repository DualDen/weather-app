import React, { FC, useState } from "react";
import { IWeather } from "../../types/WeatherTypes";
import "./Weather.css";
import geoicon from "../../assets/geoicon.svg";
import { Button, Input, Modal } from "antd";
import { fetchGallery } from "../../store/reducers/action-creators/GalleryActionCreator";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchWeatherByCity } from "../../store/reducers/action-creators/WeatherByCityActionCreator";

interface WeatherProps {
  weather: IWeather;
  isDay: boolean;
}

const Weather: FC<WeatherProps> = ({ weather, isDay }) => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState(false);
  const [city, setCity] = useState("");
  return (
    <div
      className={isDay ? "weather-container day" : "weather-container night"}
    >
      <Modal
        open={isShow}
        onCancel={() => {
          setIsShow(false);
        }}
        centered={true}
        closable={false}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div style={{ marginBottom: 10 }}>Enter your City</div>
        <Input.Search
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onSearch={() => {
            dispatch(fetchWeatherByCity(city));
          }}
          placeholder="Please enter your city"
          enterButton={<Button>Get weather</Button>}
        />
      </Modal>
      <div
        onClick={() => {
          setIsShow(true);
        }}
        className="location"
      >
        <img
          style={{ marginRight: 5 }}
          width="30px"
          height="30px"
          src={geoicon}
          alt=""
        />
        {weather.name}
      </div>
      <div className="weather-info">
        <div className="temperature">
          <div className="current-temperature">
            {`${Math.round(weather.main.temp)}°`}
          </div>
          <div className="temperature-min-max">
            {`${Math.round(weather.main.temp_max)}°/${Math.round(
              weather.main.temp_max
            )}°`}
          </div>
        </div>
        <div className="weather-status">
          <img
            style={{ marginRight: 8 }}
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
          {weather.weather[0].main}
        </div>
        <div className="weather-main">
          <div className="humidity">Humidity : {weather.main.humidity} %</div>
          <div className="pressure">
            Pressure: {Math.round(weather.main.pressure * 0.750064)} mmHg
          </div>
          <div className="feels-like">
            Feels like: {Math.round(weather.main.feels_like)}°
          </div>
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
