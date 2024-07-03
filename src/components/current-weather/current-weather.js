import React, { useState } from 'react';
import './current-weather.css';

const CurrentWeather = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToFahrenheit = (tempCelsius) => {
    return Math.round((tempCelsius * 9/5) + 32);
  };

  const temperature = isCelsius ? Math.round(data.main.temp) : convertToFahrenheit(data.main.temp);
  const feelsLike = isCelsius ? Math.round(data.main.feels_like) : convertToFahrenheit(data.main.feels_like);
  const unit = isCelsius ? '°C' : '°F';

  return (
    <div className="Weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="Weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{temperature}{unit}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{feelsLike}{unit}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
        <div className="button-container">
          <button onClick={toggleTemperatureUnit}>
            {isCelsius ? 'Switch to °F' : 'Switch to °C'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
