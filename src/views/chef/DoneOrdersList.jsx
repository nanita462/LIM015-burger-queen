import React, { useState } from "react";
import UseOrdersDone from "./UseOrdersDone.jsx";
//import DefaultDoneMessage from "./DefaultDoneMessage.jsx";
import SingleDoneOrderContext from "./SingleDoneOrderContext.jsx";
import SingleDoneOrderComponent from "./SingleDoneOrderComponent.jsx";
import './DoneOrdersList.scss';

const DoneOrders = () => {
  const currentDoneOrdersList = UseOrdersDone();
  const [singleDoneOrderData, setSingleDoneOrderData] = useState();
  const [, setSelectedOrder] = useState();

  const currentDoneActiveOrder = (orderData) => {
    setSingleDoneOrderData(orderData)
    setSelectedOrder(orderData.orderId);
  };

  return (
    <>
      <section className='doneOrderList_Container'>
        <section className="doneOrderList">
          {currentDoneOrdersList.map((order) => (
            <button
              className="descriptionDonegOrder"
              key={order.orderId}
              onClick={() => currentDoneActiveOrder(order)}
            >
              <h3> Cliente: {order.data.customer}</h3>
              <h3> Mesa : {order.data.table} </h3>
            </button>
          ))}
        </section>

        <section className='doneOrderListDescription_Container'>
          <SingleDoneOrderContext.Provider value={singleDoneOrderData}>
            {singleDoneOrderData === undefined ? (
              // <DefaultDoneMessage />
              "Selecciona un pedido para ver el detalle."
            ) : (
              <>
                <SingleDoneOrderComponent />{" "}
              </>
            )}
          </SingleDoneOrderContext.Provider>
        </section>
      </section>
    </>
  );
};

export default DoneOrders;
