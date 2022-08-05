import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';

export default function SearchBar( {onSearch} ) {
  // acá va tu código
  const [state, setState] = useState("");

  function handleInputChange (event) {
    setState(event.target.value);
  }

  return (
  <form onSubmit={(event) => {
    event.preventDefault();
    onSearch(state);
  }}>
    <input type = "text" placeholder = "ciudad..." onChange={ (event) => handleInputChange(event) } className={styles.inputBox}/>
    <input type = "submit" value = "Agregar" className={styles.btn}/>
  </form>
  )
};