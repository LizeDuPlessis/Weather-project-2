import React from "react";
import Card from "./Card";

function WeatherItems({ weather }) {
  return (
    <Card>
      <h2>
        City: <div className="data">{weather?.name}</div>
      </h2>
      <h2>
        Temperature: <div className="data">{weather?.main?.temp}°C</div>
      </h2>
      <h2>
        Feels-like:<div className="data">{weather?.main?.feels_like} °C</div>{" "}
      </h2>
      <h2>
        Humidity:<div className="data">{weather?.main?.humidity} %</div>
      </h2>
      <h2>
        Pressure:
        <div className="data">{weather?.main?.pressure} hPa</div>
      </h2>
    </Card>
  );
}

export default WeatherItems;
