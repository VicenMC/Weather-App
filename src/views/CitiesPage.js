import React from "react";
import { Link } from 'react-router-dom';
import Cards from "../components/Cards.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PrincipalCard from "../components/PrincipalCard.jsx";
import c from './CitiesPages.module.css';

function CitiesPage({ data, handleOnClose, onSearch }) {
  return (
    <div>
      <div className={c.navBar}>
        <div>
        <img className={c.logo} src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png" alt="" />
        <Link className={c.aboutButton} to='/about'>About</Link>
        </div>
        <SearchBar className={c.searchBar} onSearch={onSearch} />
      </div>
      <div className={c.principalCardContainer}>
        {data.length > 0 && (
          <PrincipalCard
            cityId={data[data.length - 1].id}
            max={data[data.length - 1].max}
            min={data[data.length - 1].min}
            name={data[data.length - 1].name}
            clouds={data[data.length - 1].clouds}
            humidity={data[data.length - 1].humidity}
            latitud={data[data.length - 1].latitud}
            longitud={data[data.length - 1].longitud}
            pressure={data[data.length - 1].pressure}
            visibility={data[data.length - 1].visibility}
            weather={data[data.length - 1].weather}
            weatherDescription={data[data.length - 1].weatherDescription}
            wind={data[data.length - 1].wind}
            temp={data[data.length - 1].temp}
            img={data[data.length - 1].img}

          />
        )}
      </div>

      <div className={c.cardsContainer}>
        <Cards cities={data} onClose={handleOnClose} />
      </div>

    </div>
  );
}

export default CitiesPage;
