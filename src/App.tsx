import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchWeather} from "./store/reducers/ActionCreators";

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(fetchWeather());
   },[]);
   const {weather,isLoading,error} = useAppSelector(state => state.weatherSlice);
   console.log(weather)

  return (
    <div className="App">

    </div>
  );
}

export default App;
