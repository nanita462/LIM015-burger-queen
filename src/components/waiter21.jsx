import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import hamburger1 from '../assets/hamburguesasimple.png';
import hamburger2 from '../assets/hamburguesadoble.png';
import fries from '../assets/papasfritas.png';
import onion from '../assets/sandwich.png';

function Waiter21() {
    return (
        <section className="menu">
            <section className="menuNames">
                <button className="menuName">Desayuno</button>
                <button className="menuName">De la casa</button>
                <button className="menuName">Bebidas</button>
            </section>

            <section className="menuDescriptions">
                <button className="fromHome"><img src={hamburger1} alt="Hamburguesa" /><h3>Hamburguesa Simple</h3><h3>$ 10</h3></button>
                <button className="fromHome"><img src={hamburger2} alt="Hamburguesa" /><h3>Hamburguesa doble</h3><h3>$ 15</h3></button>
                <button className="fromHome"><img src={fries} alt="papasfritas" /><h3>Papas fritas</h3><h3>$ 5</h3></button>
                <button className="fromHome"><img src={onion} alt="arosdecebolla" /><h3>Aros de cebolla</h3><h3>$ 5</h3></button>
            </section>
        </section>
    );
}

export default Waiter21;