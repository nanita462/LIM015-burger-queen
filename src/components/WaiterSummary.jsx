import React, { useRef } from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import { firestore } from '../firebase/config';

function WaiterSummary({ summary, setSummary }) {

  //const itemsPrice = summary.reduce((a, c) => a + c.quantity * c.price, 0);
  const inputName = useRef();

  const sendOrder = (e) => {
    e.preventDefault();

    let order = {};
    order.name = inputName.current.value || "anonimo";
    order.products = summary;
    order.created_at = new Date();
    order.status = "pending";

    firestore.collection("orders")
      .add(order)
      .then(() => {
        inputName.current.value = "";
        setSummary([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <section className="order">
        <section className="customer">

          <h2>Cliente:</h2>
          <input ref={inputName} type="text" name="customer" placeholder='Ingresa nombre de cliente' />
        </section>

        <section className='table'>
          <section className='thead'>
            <ul className='tr'>
              <li>Cantidad</li>
              <li>Producto</li>
              <li>Precio</li>
              <li>Eliminar</li>
            </ul>
          </section>
          <hr />
          {summary.length === 0 ? (
            <span>Cart Is Empty</span>
          ) : (
            summary.map((product) => (
              <section className='tbody' key={product.id}>
                <ul className='tr'>
                  {/* <li className='li'> {product.quantity} </li> */}
                  <li className='li'>


                  </li>
                  {/* <li className='li'> ${product.price}</li> */}
                  <li className='li'>

                  </li>
                </ul>
              </section>
            ))
          )}
        </section>
        <hr></hr>
        <h2>
          {/* <strong>Total: ${parseFloat(itemsPrice).toFixed(2)}</strong> */}

        </h2>

        <section className="orderButtons">
          <button className="orderButton">Cancelar</button>
          <button onClick={sendOrder} className="orderButton">Enviar</button>
        </section>

      </section>
    </>
  );
}

export default WaiterSummary;