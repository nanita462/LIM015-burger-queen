import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass

function Waiter3() {
    return (
        <section className="order">
            <section className="customer">
                <label>
                    Cliente:
                    <input type="text" name="customer" placeholder='Ingresa nombre de cliente' />
                </label>
            </section>

            <section className="orderSummary">
                <h1>Resumen del pedido</h1>
                <section className='orderSummaryHead'>
                    <ul>
                        <li>Cant.</li>
                        <li>Descripción</li>
                        <li>Precio</li>
                    </ul>
                </section>

                <section className='orderDetail'>
                    <ul>
                        <li>1</li>
                        <li>Texto prueba</li>
                        <li>$10</li>
                    </ul>
                    <section className='orderIcons'>
                        <span><i class="fas fa-plus-circle"></i></span>
                        <span><i class="fas fa-minus-circle"></i></span>
                        <span><i class="fas fa-trash-alt"></i></span>
                    </section>
                </section>

                <section>
                    <h1>Total: </h1>
                    <h1>$10 </h1>
                </section>

            </section>

            <section className="orderButtons">
                <button className="orderButtonCancel">Cancelar</button>
                <button className="orderButtonSend">Enviar</button>
            </section>

        </section>
    );
}

export default Waiter3;