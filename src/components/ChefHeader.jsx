import React from 'react';
import logoBQ from '../assets/logoBQ.png';
import BtnCloseSesion from './BtnCloseSesion.jsx';

const ChefHeader = () => {
    return (
        <header className="header__chef">
            <section className='header__chef__img'>
                <img className='imgLogo' src={logoBQ} alt="logoBQ"></img>
                <a href='/chef'>Chef</a>
            </section>
            <section className='header__chef__nav'>
                <nav className='navHeaderChef'>
                    <BtnCloseSesion />
                </nav>
            </section>

        </header>

    );
}

export default ChefHeader;