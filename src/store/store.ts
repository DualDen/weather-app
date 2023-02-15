import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/Slices/WeatherSlice";
import nasaSlice from "./reducers/Slices/NasaSlice";

const rootReducer = combineReducers({
  weatherSlice,
  nasaSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
