import React from "react";
import {Outlet, useMatch} from "react-router-dom";
import Header from "./components/Header/Header";


const App = () => {
  return <div className="App">
    <Header/>
    <Outlet/>
  </div>;
};

export default App;
