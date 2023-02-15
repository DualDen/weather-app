import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApod } from "../action-creators/NasaActionCreator";
import { APOD } from "../../../types/ApodTypes";

interface ApodState {
  apod: APOD;
  isApodLoading: boolean;
  apodError: string;
}

const initialState: ApodState = {
  apod: {
    explanation: "",
    date: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  },
  isApodLoading: false,
  apodError: "",
};

export const nasaSlice = createSlice({
  name: "nasa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApod.pending, (state) => {
      state.isApodLoading = true;
    });
    builder.addCase(
      fetchApod.fulfilled,
      (state: ApodState, action: PayloadAction<APOD>) => {
        state.apod = action.payload;
        state.isApodLoading = false;
        state.apodError = "";
      }
    );
    builder.addCase(
      fetchApod.rejected,
      (state: ApodState, action: PayloadAction<any>) => {
        state.apodError = action.payload ?? "";
        state.isApodLoading = false;
      }
    );
  },
});

export default nasaSlice.reducer;
