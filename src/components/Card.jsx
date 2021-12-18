import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card(props) {
   // acá va tu código
   const {cityId}=props;

  
   return<div className={s.container}>
     <span>{props.name}</span>
     <button className={s.botoncito} onClick={props.onClose}>X</button>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
     <div className={s.divContainer}>
          <span className={s.min}>Min: {props.min}°</span>
     <span>Max: {props.max}°</span>

     </div>
   </div>;

};