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
