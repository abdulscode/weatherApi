import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const searchButton = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=074eaff7c0ff65e46689daf289069896`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  return (
    <>
      <div className="container grid">
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value="" disabled selected>
            Country
          </option>
          <option>Pakistan</option>
          <option>China</option>
        </select>
        <select onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled selected>
            City
          </option>
          <option>Islamabad</option>
          <option>Beijing</option>
        </select>
        <button onClick={searchButton}>Search</button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <article>
          <header>{weather.name}</header>
          <footer>{weather.main.temp}C</footer>
          <footer>{weather.weather[0].main}</footer>
        </article>
      ) : (
        ""
      )}
    </>
  );
}

export default App;