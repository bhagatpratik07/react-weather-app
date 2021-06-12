import React, { useState, useEffect } from "react";
import axios from "axios";

export const WeatherData = () => {
  const [weather, setWeather] = useState([]);
  const [text, setText] = useState("london");

  function getWeatherData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid={YOUR_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
        // console.log(res.data);
      })
      .catch(() => alert("enter a valid city name"));
    setText("");
  }

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/30/b1/1a/30b11a92a85361de088b6d668785f0aa.jpg"
        alt="icon"
      />
      {/* <img
        src={
          weather.weather
            ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`
            : null
        }
        alt=""
      /> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search City..."
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={() => getWeatherData()}>Search</button>
      </form>

      <h2>{weather?.name}</h2>
      <h2> Tempreature : {weather?.main?.temp} °C</h2>
      <h2> {weather.weather ? weather?.weather[0].description : null} </h2>
      <img
        src={
          weather.weather
            ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`
            : null
        }
        alt="icon"
      />
    </div>
  );
};
