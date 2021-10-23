import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import logo from '../assets/logoBQ.png';
import BtnCloseSesion from './BtnCloseSession.jsx';

function WaiterHeader() {
    return (
        <section className="header">
            <section className="secWaiterText">
                <img src={logo} className="littleLogo" alt="logoBQ" />
                <a href='/waiter'>Meserx</a>
            </section>

            <section className="nav">
                <a href="/order_ready"><span><i className="fas fa-hamburger"></i></span>Pedidos listos</a>
                {/* <a href="/"><span><i className="fas fa-sign-out-alt"></i></span>Cerrar sesión</a> */}
                <BtnCloseSesion />
            </section>
        </section>
    );
}

export default WaiterHeader;






