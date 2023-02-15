import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APOD } from "../../../types/ApodTypes";

export const fetchApod = createAsyncThunk<
  APOD,
  string,
  { rejectValue: string }
>("nasa/fetchApod", async (_, thunkAPI) => {
  try {
    const API_KEY: string = "brcoDSPBvZFdnzf7URqwS7SO0ILjfikPfoeQh4DS";
    const response = await axios.get<APOD>(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error while loading data");
  }
});
