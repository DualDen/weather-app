import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeather } from "../../../types/WeatherTypes";

export const fetchWeatherByCity = createAsyncThunk<
  IWeather,
  string,
  { rejectValue: string }
>("weather/fetchWeatherByCity", async (city, thunkAPI) => {
  try {
    const API_KEY = "aeb79e14bc365849f88229b05db14ed6\n";
    const response = await axios.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Please enter correct city");
  }
});
