import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../store";


export const fetchWeather:any = createAsyncThunk('weather/fetchAll',
       async (dispatch:AppDispatch,thunkAPI) => {
        try {
            const API_KEY:string = "aeb79e14bc365849f88229b05db14ed6";
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=56.5181621&lon=84.9323891&appid=${API_KEY}`);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Error while getting request");
        }
    }
)