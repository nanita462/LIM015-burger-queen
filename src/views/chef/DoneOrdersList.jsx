import React, { useState, Fragment } from "react";
import UseOrdersDone from "./UseOrdersDone.jsx";
import DefaultDoneMessage from "./DefaultDoneMessage.jsx";
import SingleDoneOrderContext from "./SingleDoneOrderContext.jsx";
import SingleDoneOrderComponent from "./SingleDoneOrderComponent.jsx";

const DoneOrders = () => {
  const currentDoneOrdersList = UseOrdersDone();
  const [singleDoneOrderData, setSingleDoneOrderData] = useState();
  const [selectedOrder, setSelectedOrder] = useState();

  const currentDoneActiveOrder = (orderData) => {
    setSingleDoneOrderData(orderData)
    setSelectedOrder(orderData.orderId);
  };

  return (
    <Fragment>
      <ul className="ulDone">
        {currentDoneOrdersList.map((order) => (
          <li
            className="doneItem"
            key={order.orderId}
            onClick={() => currentDoneActiveOrder(order)}
            style={
              order.orderId === selectedOrder
                ? { backgroundColor: "#E04F4F", border: 'solid 5px #FFD195' }
                : { backgroundColor: "#E04F4F" }
            }
          >
            <div> Customer: {order.data.customer} </div>{" "}
            <div> Table : {order.data.table} </div>
          </li>
        ))}
      </ul>

      <SingleDoneOrderContext.Provider value={singleDoneOrderData}>
        {singleDoneOrderData === undefined ? (
          <DefaultDoneMessage />
        ) : (
          <Fragment>
            <SingleDoneOrderComponent />{" "}
          </Fragment>
        )}
      </SingleDoneOrderContext.Provider>
    </Fragment>
  );
};

export default DoneOrders;
