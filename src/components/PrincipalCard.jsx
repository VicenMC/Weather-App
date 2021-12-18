import React from "react";
import s from "./PrincipalCard.module.css";

export default function PrincipalCard(props) {
	let coverImage='';

	if(parseInt(props.temp) < 10){
coverImage = 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
	}else if(parseInt(props.temp) < 20){
		coverImage = 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}else if(parseInt(props.temp) < 25){
		coverImage='https://images.pexels.com/photos/21008/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}else if(parseInt(props.temp) >= 25){
		coverImage = 'https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}

	return (
		<div className={s.container} style={{backgroundImage:`url(${coverImage})`}}>
			<p className={s.name}>{props.name}</p>
						<img className={s.image} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />

			<p className={s.temperature}>{props.temp}°</p>
			<p className={s.weather}>Weather: {props.weatherDescription}</p>
			<div className={s.tempContainers}>
			<p className={s.temp}>Min: {props.min}°</p>
			<p className={s.temp}>Max: {props.max}°</p>
			</div>
<div className={s.generalInfoContainer}>
			<p className={s.generalInfo}>Clouds: {props.clouds}</p>
			<p className={s.generalInfo}>Pressure: {props.pressure}</p>
			</div>
			
			
				
<div className={s.generalInfoContainer}>
<p className={s.generalInfo}>Humidity: {props.humidity}</p>
			<p className={s.generalInfo}>Wind speed: {props.wind.speed}</p>
</div>
<div className={s.generalInfoContainer}>

			<p className={s.generalInfo}>Latitude: {props.latitud}</p>
			<p className={s.generalInfo}>Longitude: {props.longitud}</p>
			</div>
		</div>
	);
}
