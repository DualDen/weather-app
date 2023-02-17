import React from "react";
import {Outlet, useMatch} from "react-router-dom";
import Header from "./components/Header/Header";


const App = () => {
  const blockClass = () => {
    return location.href.includes('gallery') ? "App-dark" : "App"
  }
  return <div className={blockClass()}>
    <Header/>
    <Outlet/>
  </div>;
};

export default App;
