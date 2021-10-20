import React from 'react';


const ChefMenuLeftV2 = () => {
    const btnChef = () => {
        console.log('me presionaron');
    }
    return (
        <>

            <section className="orderChef">
                <section className="orderSummaryChef">
                    <section className="customerChef">
                        <h2>Cliente: Abc</h2>
                        <h2>Fecha: 10/10/21</h2>
                        <h2>Ingreso: 12:30 am</h2>

                    </section>

                    <section className='orderDetailChef'>
                        <table className='orderTableChef'>
                            <thead>
                                <tr className='orderTable__Td'>
                                    <td>Cant.</td>
                                    <td>Descripción</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='orderTable__Tr'>
                                    <td><span><input type='checkbox' value="Hamburguesa de Pollo" /></span></td>
                                    <td>1</td>
                                    <td><p>bbbb</p></td>
                                </tr><br></br>

                                <tr className='orderTable__Tr'>
                                    <td><span><input type='checkbox' value="Hamburguesa de Pollo" /></span></td>
                                    <td>1</td>
                                    <td><p>bbbb</p></td>
                                </tr><br></br>

                                <tr className='orderTable__Tr'>
                                    <td><span><input type='checkbox' value="Hamburguesa de Pollo" /></span></td>
                                    <td>1</td>
                                    <td><p>bbbb</p></td>
                                </tr><br></br>

                                <tr className='orderTable__Tr'>
                                    <td><span><input type='checkbox' value="Hamburguesa de Pollo" /></span></td>
                                    <td>1</td>
                                    <td><p>bbbb</p></td>
                                </tr><br></br>

                            </tbody>

                        </table>
                    </section>
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


        </>
    );
}

export default ChefMenuLeftV2;