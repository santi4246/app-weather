import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Card.module.css';

export default function Card( {min, max, name, img, onClose, id} ) {
  // acá va tu código
  return (
    <div className={`${style.card}`}>
    <button onClick={() => onClose(id)} className={`${style.btn}`}>X</button>
    <Link to={`/ciudad/${id}`}>
      <h3>{name}</h3>
    </Link>
    <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono-clima"/>
      <p>Temp min: {min}</p>
      <p>Temp max: {max}</p>
    </div>    
    </div>
  )
};