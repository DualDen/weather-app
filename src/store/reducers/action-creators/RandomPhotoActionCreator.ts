import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {RandomPhoto} from "../../../types/RandomPhotoTypes";

export const fetchRandomPhoto = createAsyncThunk<
    RandomPhoto,
    string,
    { rejectValue: string }
    >(
  "fetchRandomPhoto",
  async (_, thunkAPI) => {
    try {
      const API_KEY: string = "BcqKshjyOalQHnB-vk50zxygC26Uzgfm-RXzCKKoPWE";
      const response = await axios.get<RandomPhoto>(
        `https://api.unsplash.com/photos/random?client_id=${API_KEY}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Error while loading data");
    }
  }
);
