import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "./ActionCreators";



const initialState = {
    weather: {},
    isLoading: false,
    error: "",
    coords: {},
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        getCoords: (state,action) => {
            state.coords = action.payload;
        }
    },
    extraReducers: {
        [fetchWeather.pending.type]: (state,action) => {
            state.isLoading = true;
        },
        [fetchWeather.fulfilled.type]: (state,action) => {
            state.isLoading = false;
            state.weather = action.payload;
            state.error = "";
        },
        [fetchWeather.rejected.type]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default weatherSlice.reducer;