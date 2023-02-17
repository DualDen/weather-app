import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Gallery } from "../../../types/GalleryTypes";

export const fetchGallery = createAsyncThunk<
  Gallery[],
  number,
  { rejectValue: string }
>("gallery/fetchGallery", async (id, thunkAPI) => {
  try {
    const API_KEY: string = "BcqKshjyOalQHnB-vk50zxygC26Uzgfm-RXzCKKoPWE";
    const response = await axios.get<Gallery[]>(
      `https://api.unsplash.com/collections/${id}/photos?client_id=${API_KEY}`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Error while loading data");
  }
});
