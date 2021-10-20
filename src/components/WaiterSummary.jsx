import React from 'react';
import '../build/css/index.css'; // para aplicar estilo sass

function WaiterSummary() {
    return (
        <section className="order">
            <section className="customer">

                <h2>Cliente:</h2>
                <input type="text" name="customer" placeholder='Ingresa nombre de cliente' />
            </section>

            <section className="orderSummary">
                <h2>Resumen del pedido</h2>


                <section className='orderDetail'>
                    <table className='orderTable'>

                        <tr>

                            <td>Cant.</td>
                            <td>Descripción</td>
                            <td>Precio</td>

                        </tr>


                        <tr className='orderTableTr'>

                            <td>1</td>
                            <td>hamburguesa de pollo, queso y huevo vvvvvvvvv</td>
                            <td>$10</td>

                            <th><span><i className="fas fa-plus-circle"></i></span></th>
                            <th><span><i className="fas fa-minus-circle"></i></span></th>
                            <th><span><i className="fas fa-trash-alt"></i></span></th>
                        </tr>
                        <tr className='orderTableTr'>

                            <td>1</td>
                            <td>hamburguesa de pollo, queso y huevo vvvvvvvvv</td>
                            <td>$10</td>

                            <th><span><i className="fas fa-plus-circle"></i></span></th>
                            <th><span><i className="fas fa-minus-circle"></i></span></th>
                            <th><span><i className="fas fa-trash-alt"></i></span></th>
                        </tr>

                        <tr className='orderTableTr'>

                            <td>1</td>
                            <td>hamburguesa de pollo, queso y huevo vvvvvvvvv</td>
                            <td>$10</td>

                            <th><span><i className="fas fa-plus-circle"></i></span></th>
                            <th><span><i className="fas fa-minus-circle"></i></span></th>
                            <th><span><i className="fas fa-trash-alt"></i></span></th>
                        </tr>
                        <tr className='orderTableTr'>

                            <td>1</td>
                            <td>hamburguesa de pollo, queso y huevo vvvvvvvvv</td>
                            <td>$10</td>



                            <th><span><i className="fas fa-plus-circle"></i></span></th>
                            <th><span><i className="fas fa-minus-circle"></i></span></th>
                            <th><span><i className="fas fa-trash-alt"></i></span></th>
                        </tr>


                    </table>
                </section>

                <section>
                    <h2>Total: $10 </h2>

                </section>

            </section>

            <section className="orderButtons">
                <button className="orderButton">Cancelar</button>
                <button className="orderButton">Enviar</button>
            </section>

        </section>
    );
}

export default WaiterSummary;