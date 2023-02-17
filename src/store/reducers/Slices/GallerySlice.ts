import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchGallery } from "../action-creators/GalleryActionCreator";
import { Gallery } from "../../../types/GalleryTypes";

interface GalleryState {
  gallery: Gallery[];
  isLoading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  gallery: [],
  isLoading: false,
  error: "",
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGallery.pending, (state:GalleryState) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGallery.fulfilled, (state:GalleryState, action:PayloadAction<Gallery[]>) => {
      state.gallery = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchGallery.rejected, (state: GalleryState, action:PayloadAction<any>) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default gallerySlice.reducer;
