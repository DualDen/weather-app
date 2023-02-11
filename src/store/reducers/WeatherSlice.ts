import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWeather} from "../../types/WeatherTypes";


interface WeatherState {
    weather: IWeather | object,
    isLoading: boolean,
    error: string | null,
}

const initialState:WeatherState = {
    weather: {
        dt: 0,
        id: 0,
        main: {
            temp: 0
        }
    },
    isLoading: false,
    error: "",
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeatherPending: (state,action) => {
          state.isLoading = true;
        },
        setWeatherSuccess: (state,action:PayloadAction<IWeather>) => {
            state.isLoading = false;
            state.weather = action.payload;
            state.error = "null";
        },
        setWeatherError: (state,action:PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    },
});

export default weatherSlice.reducer;