import React from "react";
import { Link } from 'react-router-dom';
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import SearchBar from "../components/SearchBar.jsx";
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
      <div>
        {data.length > 0 && (
          <Card 
            cityId={data[data.length - 1].id}
            max={data[data.length - 1].min}
            min={data[data.length - 1].max}
            name={data[data.length - 1].name}
            img={data[data.length - 1].img}
          />
        )}
      </div>
      <hr />
      <div>
        <Cards cities={data} onClose={handleOnClose} />
      </div>
      <hr />
    </div>
  );
}

export default CitiesPage;
