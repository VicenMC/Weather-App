import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CitiesPage from "./views/CitiesPage";
import CityDetail from "./views/CityDetail";
import About from "./views/About";

import FetchCity from "./services/fetchCity";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("You can not add more cities");
    } else {
      FetchCity(ciudad, setData, apiKey);
    }
  }

  function onSearchById(id) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setData((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  const [data, setData] = React.useState([]);
  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <CitiesPage
                data={data}
                handleOnClose={handleOnClose}
                onSearch={onSearch}
              />
            }
          />
          <Route path="/city/:id" element={<CityDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// render={({ match }) => {
//               const city = data.find((city) => city.id === parseInt(match.params.id));
//               console.log(city)
//               return
