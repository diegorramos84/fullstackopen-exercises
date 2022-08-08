import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({lat, lng}) => {

  const [temp, setTemp] = useState([])
  const [icon, setIcon] = useState([])
  const [wind, setWind] = useState([])


  console.log('weather effect')

  useEffect (() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => {
      console.log('promise fulfilled')
      setTemp(response.data.main.temp)
      setIcon(response.data.weather[0].icon)
      setWind(response.data.wind.speed)
  })
    },[])

  return (
    <div>
      <p>temperature {temp} Celcius</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
      <p>wind {wind} m/s </p>
    </div>
  )





  }

  export default Weather
