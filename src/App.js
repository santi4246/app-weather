import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar';
import About from './components/About';
import styles from './styles/Container.module.css';
import Ciudad from './components/Ciudad';

function App() {
  //Estados iniciales de los componentes
  const [state, setState] = useState([]);
  const APIKEY = '4ae2636d8dfbdc3044bede63951a019b';

  //Funciones asíncroncas de llamada a la API
  function onSearch (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`).then((r) => r.json()).then((resource) => {
      if (resource.main !== undefined) {
        const city = {
          id: resource.id,
          name: resource.name,
          min: Math.round(resource.main.temp_min),
          max: Math.round(resource.main.temp_max),
          img: resource.weather[0].icon,
          temp: resource.main.temp,
          wind: resource.wind.speed,          
          weather: resource.weather[0].main,
          clouds: resource.clouds.all,
          latitud: resource.coord.lat,
          longitud: resource.coord.lon
        }
        setState((oldCities) => {
          if (oldCities.some(c => c.name === city.name)) {
            return oldCities;
          }
          else{
            return [...oldCities, city];
          }
        });
      }      
      else{
        alert('Ciudad no encontrada...');
      }
    })
  }

  //Función onClose para eliminar las Cards renderizadas
  function onClose (id) {
    setState(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onFilter (ciudadId) {
    let ciudad = state.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    }
    else{
      return null;
    }
  }
  
  //Método Render, donde se renderizan los componentes  
  return (
    <div className="App">
      <div className={`${styles.container}`}>
        
        <Route path={'/'} 
        render = {() => <Navbar onSearch={onSearch}/>}
        />
        <Route path='/about'
        component = {About}
        />
        <Route exact path='/'
        render = {() => <Cards cities={state} onClose={onClose}/>}
        />
        {/* La siguiente ruta se puede utilizar con Hooks al ser componente funcional */}
        {/* <Route path="/ciudad/:ciudadId" render={() => <Ciudad city={onFilter}/>}/> */}
        <Route path="/ciudad/:ciudadId" render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
        
      </div>      
    </div>
  );
}

export default App;