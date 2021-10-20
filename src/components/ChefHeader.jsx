import React from 'react';
import logoBQ from '../assets/logoBQ.png'

const ChefHeader = () => {
    return (
        <header className="header__chef">
            <section className='header__chef__img'>
                <img className='imgLogo' src={logoBQ} alt="logoBQ"></img>
                <a href='/chef'>Chef</a>
            </section>
            <section className='header__chef__nav'>
                <nav className='navHeaderChef'>
                    <a href="/"><i className="fas fa-sign-out-alt"></i>Cerrar Sesión</a>
                </nav>
            </section>

        </header>

    );
}

export default ChefHeader;