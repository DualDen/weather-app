import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchWeather } from "../../store/reducers/action-creators/WeatherActionCreator";
import { fetchApod } from "../../store/reducers/action-creators/NasaActionCreator";
import Weather from "../../components/Weather/Weather";
import Apod from "../../components/Apod/Apod";
import "./WeatherPage.css";
import { weatherSlice } from "../../store/reducers/Slices/WeatherSlice";

const WeatherPage: FC = () => {
  const dispatch = useAppDispatch();
  const { setDate } = weatherSlice.actions;
  useEffect(() => {
    dispatch(setDate());
    dispatch(fetchWeather());
    dispatch(fetchApod(""));
    const updateDate = setInterval(() => {
      dispatch(setDate());
    }, 5000);
    return () => {
      clearInterval(updateDate);
    };
  }, []);
  const { weather, date, isWeatherLoading, isDay, weatherError } =
    useAppSelector((state) => state.weatherSlice);
  const { apod, apodError, isApodLoading } = useAppSelector(
    (state) => state.nasaSlice
  );
  return (
    <>
      <div className="container">
        {!isApodLoading && !isWeatherLoading ? (
          <div className="weather-block">
            <Apod
              apod={apod}
              error={apodError}
              isLoading={isApodLoading}
              date={date}
            />
            <Weather
              weather={weather}
              isLoading={isWeatherLoading}
              error={weatherError}
            />
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default WeatherPage;
