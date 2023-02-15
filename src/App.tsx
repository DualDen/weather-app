import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchWeather } from "./store/reducers/action-creators/WeatherActionCreator";
import { fetchApod } from "./store/reducers/action-creators/NasaActionCreator";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather());
    dispatch(fetchApod(""));
  }, []);
  const { weather, isWeatherLoading, weatherError } = useAppSelector(
    (state) => state.weatherSlice
  );
  const { apod } = useAppSelector((state) => state.nasaSlice);
  console.log(weather);
  console.log(apod);

  return <div className="App">Hello</div>;
};

export default App;
