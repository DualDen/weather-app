import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../../types/WeatherTypes";

interface WeatherState {
  weather: IWeather;
  isWeatherLoading: boolean;
  weatherError: string | null;

}

const initialState: WeatherState = {
  weather: {
    dt: 0,
    id: 0,
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      pressure: 0,
      humidity: 0,
      feels_like: 0,
    },
    name: "",
    sys: {
      country: "",
      id: 0,
      sunrise: 0,
      sunset: 0,
    },
    weather: [
      {
        id: 0,
        description: "",
        main: "",
        icon: "",
      },
    ],
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
  },
  isWeatherLoading: false,
  weatherError: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherPending: (state, action) => {
      state.isWeatherLoading = true;
    },
    setWeatherSuccess: (state, action: PayloadAction<IWeather>) => {
      state.isWeatherLoading = false;
      state.weather = action.payload;
      state.weatherError = "null";
    },
    setWeatherError: (state, action: PayloadAction<string>) => {
      state.weatherError = action.payload;
      state.isWeatherLoading = false;
    },
  },
});

export default weatherSlice.reducer;
