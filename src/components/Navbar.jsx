import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar';
import About from './About';

function Navbar( {onSearch} ){
    return (
        <>
        <nav className="navbar navbar-dark bg-dark"> {/* Estilo importado desde Boostrap */}
        <Link to='/'>
            <a className="navbar-brand" href="/home">
                <img src={Logo} alt="Logo-Henry" />
            </a>            
        </Link>
        <Link to='/about'>
            <span>About</span>
        </Link>
            <SearchBar onSearch={onSearch}/> {/* Estilo importado en el componente searchBar */}
        </nav>
        </>
    );
}
export default Navbar;