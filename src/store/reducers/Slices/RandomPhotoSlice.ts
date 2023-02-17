import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchRandomPhoto } from "../action-creators/RandomPhotoActionCreator";
import {RandomPhoto} from "../../../types/RandomPhotoTypes";

interface RandomPhotoState {
  randomPhoto: RandomPhoto,
  isRandomLoading: boolean,
  error: string,
}

const initialState:RandomPhotoState = {
  randomPhoto: {
    id: "",
    alt_description: "",
    urls: {
      full: "",
    },
    user: {
      id: "",
      first_name: "",
      last_name: "",
    }
  },
  isRandomLoading: false,
  error: "",
};

export const randomPhotoSlice = createSlice({
  name: "randomPhoto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomPhoto.pending, (state:RandomPhotoState) => {
      state.isRandomLoading = true;
    });
    builder.addCase(fetchRandomPhoto.fulfilled, (state:RandomPhotoState, action:PayloadAction<RandomPhoto>) => {
      state.isRandomLoading = false;
      state.randomPhoto = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRandomPhoto.rejected, (state: RandomPhotoState, action:PayloadAction<any>) => {
      state.isRandomLoading = false;
      state.error = action.payload;
    });
  },
});

export default randomPhotoSlice.reducer;
