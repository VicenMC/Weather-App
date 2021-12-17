export default function FetchCity(ciudad, setData, apiKey) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind,
              temp: recurso.main.temp,
              pressure: recurso.main.pressure,
              humidity: recurso.main.humidity,
              visibility:recurso.visibility,
              name: recurso.name,
              weather: recurso.weather[0].main,
              weatherDescription: recurso.weather[0].description,
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