import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Display from "./components/Display";
import Time from "./components/Time";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import "./App.css";
import getFormattedWeatherData from './services/weatherService';
import {useEffect, useState} from "react";
import Background from "./components/Background";

function App() {
  const [query, setQuery] = useState({ q: 'Orange'});
  const [getWeather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(
      (data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="display">
    <Display setQuery = {setQuery}/>
    {getWeather && (
      <div>
        <Time getWeather = {getWeather} />
        <Weather getWeather = {getWeather} />
        <Forecast title="HOURLY FORECAST" items = {getWeather.hourly} />
        <Forecast title="DAILY FORECAST" items = {getWeather.daily} />
        <Background />
      </div>
    )}
    </div>
  );
}

export default App;
