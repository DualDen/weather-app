import axios from "axios";
import { AppDispatch } from "../../store";
import { weatherSlice } from "../Slices/WeatherSlice";
import { IWeather } from "../../../types/WeatherTypes";

export const fetchWeather = () => (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.setWeatherPending());
    const API_KEY: string = "aeb79e14bc365849f88229b05db14ed6";
    navigator.geolocation.getCurrentPosition(async (success) => {
      const { latitude, longitude } = success.coords;
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      dispatch(weatherSlice.actions.setWeatherSuccess(response.data));
    });
  } catch (e) {
    weatherSlice.actions.setWeatherError("Error while loading data");
  }
};
