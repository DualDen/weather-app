import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import {router} from "./utils/routes";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();
console.log(store);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
