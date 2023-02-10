import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchWeather} from "./store/reducers/ActionCreators";

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(fetchWeather());
       console.log(dispatch(fetchWeather()));
   },[]);
   const {weather,isLoading,error} = useAppSelector(state => state.weatherSlice);


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
