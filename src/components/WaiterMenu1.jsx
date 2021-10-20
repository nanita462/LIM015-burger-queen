import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import coffee from '../assets/cafeamericano.png';
import sandwich from '../assets/sandwich.png';
import juice from '../assets/jugodefrutas.png';


function WaiterMenu1() {
    return (
        <>
            <section className="menuDescriptions">
                <button className="breakfast"><img src={coffee} alt="café" /><h3>Café americano</h3><h3>$ 5</h3></button>
                <button className="breakfast"><img src={coffee} alt="café" /><h3>Café con leche</h3><h3>$ 7</h3></button>
                <button className="breakfast"><img src={sandwich} alt="sandwich" /><h3>Sandwich de jamón y queso</h3><h3>$ 10</h3></button>
                <button className="breakfast"><img src={juice} alt="jugo" /><h3>Jugo de frutas natural</h3><h3>$ 7</h3></button>
            </section>
        </>
    );
}

export default WaiterMenu1;