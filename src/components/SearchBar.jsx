import React from "react";
import c from "./SearchBar.module.css";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [search, setSearch] = React.useState("");

  const handleOnSearch = () => {
    if(search !== ""){
    onSearch(search);
    setSearch("");}
  };
  return (
    <div className={c.container}>
       <button className={c.buttonSearch} onClick={handleOnSearch}>
        <FaSearch />
      </button>
      <input
        id="searchInput"
        className={c.inputSearch}
        placeholder="Search country..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();  
        }}
      />
     
    </div>
  );
}
