import React from "react";
import { useState, useEffect } from "react";
import WeatherItems from "./WeatherItems";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function WeatherContainer() {
  const [weather, setWeather] = useState({});
  const [userSubmit, setUserSubmit] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
  }, []);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const getNewWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${userSubmit}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getNewWeather();
  };

  console.log(weather);
  console.log(userSubmit);
  return (
    <div>
      {/* {userSubmit} */}
      <form className="form-group" onSubmit={handleUserSubmit} role="search">
        <input
          className="search-bar"
          type="search"
          placeholder="search here..."
          name="search"
          id="search"
          onChange={(e) => setUserSubmit(e.target.value)}
        />
        <button className="search-btn">➡</button>
      </form>
      <main>
        <WeatherItems weather={weather} />
      </main>
    </div>
  );
}

export default WeatherContainer;
