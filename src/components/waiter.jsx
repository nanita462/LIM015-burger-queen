import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import logo from '../assets/logoBQ.png';

function Waiter() {
    return (
        <section className="header">
            <section className="secWaiterText">
                <img src={logo} className="littleLogo" alt="logoBQ" />
                <a href='#/waiter'>Meserx</a>
            </section>

            <section className="nav">
                <a href="#/home"><span><i className="fas fa-home"></i></span>Inicio</a>
                <a href="#/users"><span><i className="fas fa-user-friends"></i></span>Usuarios</a>
                <a href="#/orderReady"><span><i className="fas fa-hamburger"></i></span>Pedidos listos</a>
            </section>
        </section>
    );
}

export default Waiter;