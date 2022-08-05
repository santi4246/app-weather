import React from "react";
//import { useParams } from "react-router-dom";
import styles from '../styles/Ciudad.module.css';

//El componente Ciudad deberá recibir por parámetros la función onFilter
export default function Ciudad({city}) {
    // const params = useParams()
    // const city = onFilter(params.ciudadId);

    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}