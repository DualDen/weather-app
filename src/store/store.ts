import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/Slices/WeatherSlice";
import nasaSlice from "./reducers/Slices/NasaSlice";
import gallerySlice from "./reducers/Slices/GallerySlice";
import randomPhotoSlice from "./reducers/Slices/RandomPhotoSlice";

const rootReducer = combineReducers({
  weatherSlice,
  nasaSlice,
  gallerySlice,
  randomPhotoSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
