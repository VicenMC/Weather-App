import React from "react";
import s from "./PrincipalCard.module.css";

export default function PrincipalCard(props) {
	let coverImage='';
	console.log(props.temp)
	console.log(typeof(props.temp))

	if(parseInt(props.temp) < 20){
coverImage = 'https://images.pexels.com/photos/2941985/pexels-photo-2941985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
	}else{
		coverImage = 'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}

	return (
		<div className={s.container} style={{backgroundImage:`url(${coverImage})`}}>
			<p>{props.name}</p>
			<p>{props.temp}°</p>
			<img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
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
