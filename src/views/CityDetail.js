import React from "react";
import { useParams } from "react-router-dom";
import fetchCityById from "../services/fetchCityById";

function CityDetail({}) {
  let { id: code } = useParams();
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchCityById(code, setCity);
  }, [code, setCity]);
  console.log(city);

  return (
    <div>
      {city === undefined && <h2>Cargando...</h2>}
      {city === null && <h2>Ciudad no encontrada</h2>}
      {city && (
        <div>
          <p>{city.name}</p>
          <p>{city.temp}</p>
          <p>{city.weather}</p>
          <p>{city.latitud}</p>
          <p>{city.longitud}</p>
          <p>{city.wind}</p>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
