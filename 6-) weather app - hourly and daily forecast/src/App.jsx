import React, { useEffect, useState } from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TemperatureDetails  from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService'

function App() {

  const [query, setQuery] = useState({q: 'london'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data)
        console.log(data);
      });
    };
  fetchWeather();

  }, [query, units])

 


  return (

    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-gray-800 to-gray-400 h-fit shadow-xl shadow-gray-400'>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits/>

      {weather &&(
        <div>
        <TimeLocation weather={weather}/>
        <TemperatureDetails weather={weather}/>
        <Forecast title={'Hourly Forecast'} items={weather.hourly}/>
        <Forecast title={'Daily forecast'} items={weather.daily}/>
        </div>
      )}

      

    </div>
    
    )
}

export default App
