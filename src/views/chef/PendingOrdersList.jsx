import React, { useState} from "react";
import UseOrdersPending from "./UseOrdersPending.jsx";
import SinglePendingOrderComponent from "./SinglePendingOrderComponent.jsx";
import SingleOrderContext from "./SingleOrderContext.jsx";
import DefaultMessage from "./DefaultMessage.jsx";
import'./PendingOrderList.scss'

const PendingOrders = () => {
  const currentOrdersList = UseOrdersPending();
  const [singleOrderData, setSingleOrderData] = useState();
  const [selectedOrder, setSelectedOrder] = useState();

  const currentActiveOrder = (orderData) => {
    setSingleOrderData(orderData);
    setSelectedOrder(orderData.orderId);
  };

  return (
    <>
      <ul className="ulPending">
        {currentOrdersList.map((order) =>

        (
          <li
            className="pendingItem"
            key={order.orderId}
            style={
              order.orderId === selectedOrder
                ? { backgroundColor: "#5D9B84" }
                : { backgroundColor: "#FFD195" }
            }
            onClick={() => currentActiveOrder(order)}
          >

            <button className='description'> <h3>Customer: {order.data.customer}</h3> <h3>Table : {order.data.table}</h3> </button>
            
          </li>
        ))}
      </ul>

      <SingleOrderContext.Provider
        value={[singleOrderData, setSingleOrderData]}
      >
        {singleOrderData === undefined ? (
          <DefaultMessage />
        ) : (
          <>
            <SinglePendingOrderComponent />{" "}
          </>
        )}
      </SingleOrderContext.Provider>
    </>
  );
};

export default PendingOrders;
