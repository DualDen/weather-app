import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import WeatherPage from "../pages/WeatherPage";
import GalleryPage from "../pages/GalleryPage";


export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <WeatherPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);
