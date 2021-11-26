import React, { useState } from "react";
import UseOrdersPending from "./UseOrdersPending.jsx";
import SinglePendingOrderComponent from "./SinglePendingOrderComponent.jsx";
import SingleOrderContext from "./SingleOrderContext.jsx";
//import DefaultMessage from "./DefaultMessage.jsx";
import './PendingOrderList.scss'

const PendingOrders = () => {
  const currentOrdersList = UseOrdersPending();
  const [singleOrderData, setSingleOrderData] = useState();
  const [, setSelectedOrder] = useState();

  const currentActiveOrder = (orderData) => {
    setSingleOrderData(orderData);
    setSelectedOrder(orderData.orderId);
  };

  return (
    <>
      <section className='pendingOrderList_Container'>
        <section className="pendingOrderList">
          {currentOrdersList.map((order) =>
          (
            <button
              className="descriptionPendingOrder"
              key={order.orderId}
              onClick={() => currentActiveOrder(order)}
            >
              <h3>Cliente: {order.data.customer}</h3>
              <h3>Mesa: {order.data.table}</h3>
            </button>
          ))}
        </section>

        <section className='pendingOrderListDescription_Container'>
          <SingleOrderContext.Provider
            value={[singleOrderData, setSingleOrderData]}
          >
            {singleOrderData === undefined ? (
              // <DefaultMessage />
              'Selecciona un pedido para ver el detalle.'
            ) : (
              <>
                <SinglePendingOrderComponent />{" "}
              </>
            )}
          </SingleOrderContext.Provider>
        </section>

      </section>
    </>
  );
};

export default PendingOrders;
