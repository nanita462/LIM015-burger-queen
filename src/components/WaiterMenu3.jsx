import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import water from '../assets/aguamineral.png';
import soda1 from '../assets/gaseosa1.png';

function WaiterMenu3() {
    return (
        <section className="menuDescriptions">
            <button className="breakfast"><img src={water} alt="agua" /><h3>Agua 500mL</h3><h3>$ 5</h3></button>
            <button className="breakfast"><img src={water} alt="agua" /><h3>Agua 750mL</h3><h3>$ 7</h3></button>
            <button className="breakfast"><img src={soda1} alt="gaseosa" /><h3>Gaseosa 500mL</h3><h3>$ 10</h3></button>
            <button className="breakfast"><img src={soda1} alt="gaseosa" /><h3>Gaseosa 750mL</h3><h3>$ 7</h3></button>
        </section>
    );
}

export default WaiterMenu3;