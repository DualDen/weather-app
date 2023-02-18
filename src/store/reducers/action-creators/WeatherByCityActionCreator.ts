import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCity",
  async (city: string, thunkAPI) => {
    try {
      const API_KEY = "aeb79e14bc365849f88229b05db14ed6\n";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`
      );
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue("Please enter correct city");
    }
  }
);
