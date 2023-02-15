import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IWeather, DateType, Month, Day} from "../../../types/WeatherTypes";

interface WeatherState {
  weather: IWeather;
  isWeatherLoading: boolean;
  weatherError: string | null;
  date: DateType;
  isDark: boolean;
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
  date: {
    hours: 0,
    minutes: 0,
    day: "",
    month: "",
    dayNumber: 0,
  },
  isDark: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherPending: (state) => {
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
    setTime: (state: WeatherState) => {
      const date = new Date();
      state.date.month = Month[date.getMonth()];
      state.date.day = Day[date.getDay()];
      state.date.hours = date.getHours();
      if (date.getHours() >= 23 || date.getHours() < 9) {
        state.isDark = true;
      }
      state.date.minutes = date.getMinutes();
      state.date.dayNumber = date.getDate();
    },
  },
});

export default weatherSlice.reducer;
