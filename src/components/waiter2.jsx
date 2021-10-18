import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import coffee from '../assets/cafeamericano.png';
import sandwich from '../assets/sandwich.png';
import juice from '../assets/jugodefrutas.png';

function Waiter2() {
    return (
        <section className="menu">
            <section className="menuNames">
                <button className="menuName">Desayuno</button>
                <button className="menuName">De la casa</button>
                <button className="menuName">Bebidas</button>
            </section>

            <section className="menuDescriptions">
                <button className="breakfast"><img src={coffee} alt="café" />Café americano<h2>$ 5</h2></button>
                <button className="breakfast"><img src={coffee} alt="café" />Café con leche<h2>$ 7</h2></button>
                <button className="breakfast"><img src={sandwich} alt="sandwich" />Sandwich de jamón y queso<h2>$ 10</h2></button>
                <button className="breakfast"><img src={juice} alt="jugo" />Jugo de frutas natural<h2>$ 7</h2></button>
            </section>
        </section>
    );
}

export default Waiter2;