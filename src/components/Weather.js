import React from 'react'

function Weather({cityName, temp, humidity, windSpeed}) {
  return (
      <div className='weather'>
        <h2>{cityName}</h2>
        <h3>Temperature: {temp}<span>°C</span></h3>
        <h3>Humidity: {humidity}<span>%</span></h3>
        <h3>Wind speed: {windSpeed}<span> m/s</span></h3>
      </div>
  )
}

export default Weather
