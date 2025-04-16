import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine.jsx";
import Forecast from "./Forecast.jsx";

import styles from "./styles.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const WeatherStyle = {
  textalign: "center",
  margin: 50,
  width: 90,
  maxwidth: 700,
  borderradius: 20,
  boxshadow: 0,
  padding: 20,
  backgroundcolor: "lightblue",
};
const WeatherBodyStyle = {
  backgroundimage: `url("../images/background.png")`,
  backgroundsize: "cover",
  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundattachment: "fixed",
  fontfamily: "Poppins",
  margin: 0,
  padding: 0,
};

function Weather() {
  const [query, setQuery] = useState("London");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async (event) => {
    event.preventDefault();
    if (
      event.type === "click" ||
      (event.type === "keypress" && event.key === "Enter")
    ) {
      setWeather({ ...weather, loading: true });
      // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      // const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
      // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e4fce48c34d6f7c5779765a2f3f6608'
      const apiKey = "3e4fce48c34d6f7c5779765a2f3f6608";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiKey}`;

      try {
        const res = await axios.get(url);
        setWeather({ data: res.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "3e4fce48c34d6f7c5779765a2f3f6608";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.error("Error fetching initial weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="WeatherBody" style={WeatherBodyStyle}>
      <div className="Weather" style={WeatherStyle}>
        {/* SearchEngine component */}
        <SearchEngine query={query} setQuery={setQuery} search={search} />
        {weather.loading && (
          <>
            <br />
            <br />
            <h4>Searching...</h4>
          </>
        )}
        {weather.error && (
          <>
            <br />
            <br />
            <span className="error-message">
              <span style={{ fontFamily: "font" }}>
                Sorry, city not found. Please try again.
              </span>
            </span>
          </>
        )}
        {weather && weather.data && weather.data.condition && (
          // Forecast component
          <Forecast weather={weather} toDate={toDate} />
        )}
      </div>
    </div>
  );
}

export default Weather;
