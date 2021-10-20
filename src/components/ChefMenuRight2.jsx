import React from 'react';


const ChefMenuLeftV2 = () => {
    const btnChef = () => {
        console.log('me presionaron');
    }
    return (
        <>

            <section className="orderChef">
                <section className="customerChef">

                    <h2>Cliente: Abc</h2>
                    <section className="date">
                        <section className="dateh2">
                            <h2>Fecha:</h2><input type='date' name="customer" />
                        </section>
                        <section className="dateh2">
                            <h2>Hora:</h2><input type='time' value='HH:mm' name="customer" />
                        </section>
                    </section>
                </section>

                <section className="orderSummaryChef">



                    <section className='orderDetailChef'>
                        <table className='orderTableChef'>
                            <thead>
                                <tr>

                                    <td>Cant.</td>
                                    <td>Descripción</td>


                                </tr>
                            </thead>
                            <tbody>
                                <tr className='orderTable__Tr'>

                                    <td>1</td>

                                    <td><p>Hamburguesa de Pollo</p></td>
                                </tr><br></br>
                                <tr className='orderTable__Tr'>

                                    <td>1</td>

                                    <td><p>Agua</p></td>
                                </tr><br></br>
                                <tr className='orderTable__Tr'>

                                    <td>1</td>

                                    <td><p>Gaseosa</p></td>
                                </tr><br></br>
                                <tr className='orderTable__Tr'>

                                    <td>1</td>

                                    <td><p>Cafe con leche</p></td>
                                </tr><br></br>



                            </tbody>

                        </table>
                    </section>



                </section>
                <section className='order__Button'>
                    <button type='submit'
                        className='btn__chefMenuLeftV2_cancelar'
                        onClick={() => { btnChef() }}>Cancelar</button>


                    <button type='submit'
                        className='btn__chefMenuLeftV2_cancelar'
                        onClick={() => { btnChef() }}>Listo</button>
                </section>
            </section>

        </>
    );
}

export default ChefMenuLeftV2;