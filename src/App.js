import { useState } from "react"
import Weather from "./components/Weather"
import "./App.css"

function App() {

  const [ city, setCity ] = useState("")
  const [ weather, setWeather ] = useState({})

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleClick = () => {
    fetchWeather()
    setCity("")
  }

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API}`)
    .then(dataJson => dataJson.json())
    .then(data => setWeather(data))
    console.log(weather)
    }

  return (
      <div className="container">
        <main>
      <div className="searchBox">
      <input 
      className="weatherInput"
      value={city}
      placeholder="Search city..."
      onChange={handleChange}
      />
      <button
      className="weatherBtn"
      onClick={handleClick}
      >Search</button>
      </div>
      <div>
        <div className="weatherBox">
      {weather.name?
        <Weather 
        cityName={weather.name}
        temp={Math.round(weather.main.temp)}
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
        /> :
        null}
        </div>
        </div>
        </main>
    </div> 
  )
}

export default App
