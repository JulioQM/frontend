// este apartado es una clase de navegacion
import React from 'react';
const Navbar = ({ brand }) => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                < a href='#!' className='navbar-brand'>{brand}</a>
            </div>
        </nav>
    );
}
// exportamos el Navbar.js ,es un complemento
export default Navbar;