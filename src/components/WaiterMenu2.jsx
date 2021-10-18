import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import hamburger1 from '../assets/hamburguesasimple.png';
import hamburger2 from '../assets/hamburguesadoble.png';
import fries from '../assets/papasfritas.png';
import onion from '../assets/sandwich.png';


function WaiterMenu2() {
    return (
        <>
        

            <section className="menuDescriptions">
            <button className="breakfast"><img src={hamburger1} alt="Hamburguesa" /><h3>Hamburguesa Simple</h3><h3>$ 10</h3></button>
                <button className="breakfast"><img src={hamburger2} alt="Hamburguesa" /><h3>Hamburguesa doble</h3><h3>$ 15</h3></button>
                <button className="breakfast"><img src={fries} alt="papasfritas" /><h3>Papas fritas</h3><h3>$ 5</h3></button>
                <button className="breakfast"><img src={onion} alt="arosdecebolla" /><h3>Aros de cebolla</h3><h3>$ 5</h3></button>
            </section>

            </>

    );
}

export default WaiterMenu2;