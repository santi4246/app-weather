import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';

export default function Cards( {cities, onClose} ) {
  // acá va tu código
  // tip, podés usar un map
  if (cities.length) {
    return (
    <div className={styles.cardsContainer}>      
      {
        cities.map(city => <Card
        key = {city.id}
        id = {city.id}
        name = {city.name}
        max = {city.max}
        min = {city.min}
        img = {city.img}
        onClose = {onClose}
        />)
      }
    </div>
    );
  }
  else{
    return (
      <h3>No hay ciudades disponibles</h3>
    );
  }
};