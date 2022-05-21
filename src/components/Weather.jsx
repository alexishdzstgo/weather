import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Centigrados from './Centigrados';
import Fahrenheit from './Fahrenheit';

const Weather = () => {

    const [ changeView, setChangeView] = useState(true)
    const [ weather, setWeather ] = useState({})

    let temp = weather.main?.temp
    let tempMin = weather.main?.temp_min
    let tempMax = weather.main?.temp_max


  useEffect(() =>{

    function success(pos) {
      
      var crd = pos.coords;
      
      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=400993789e5be41759e1b4fb4494d094`)
      .then(res => setWeather(res.data))
    };
    
    function error(err) {
      console.log("El usuario no permitió su ubicación ");
    };
    
    navigator.geolocation.getCurrentPosition(success, error);

  },[])
  

    return (
        <div>
            <h1>Weather App</h1>
            <p></p>
            <p><i class="fa-solid fa-location-dot"></i> {weather.name} {weather.sys?.country}</p>
            <p>{weather.weather?.[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            {changeView ? 
            <Centigrados temp= {temp} tempMin= {tempMin} tempMax = {tempMax} /> : 
            <Fahrenheit temp= {temp} tempMin= {tempMin} tempMax = {tempMax}/>
            }
          <button onClick={ ()=> setChangeView(!changeView)} >°C / °F <strong></strong></button>
        </div>
    );
};

export default Weather;