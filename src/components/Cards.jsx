import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css'


export default function Cards({cities, onClose}) {
   // acá va tu código
  // tip, podés usar un map

return <div className={s.container}>
{cities.map((city, index) =>(
  <Card key={city.id}
  cityId={city.id}
  name={city.name}
  min={city.min}
  max={city.max}
  img={city.img}
  onClose={() => onClose(city.id)}
  />
))}
</div>
};