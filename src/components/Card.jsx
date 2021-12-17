import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card(props) {
   // acá va tu código
   const {cityId}=props;

  
   return<div className={s.container}>
     <Link to={`/city/${cityId}`} >Ciudad: {props.name}</Link>
     <button className={s.botoncito} onClick={props.onClose}>X</button>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
     <div className={s.divContainer}>
     <span>Max {props.max}</span>
     <span className={s.min}>Min: {props.min}</span>
     </div>
   </div>;

};