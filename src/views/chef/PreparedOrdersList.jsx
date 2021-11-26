import React from "react";
import UseOrdersDone from "./UseOrdersDone.jsx";

//import "../modal/preparedModal.scss";
import { firestore } from "../../firebase/config";

const PreparedOrdersList = () => {
  const currentPreparedOrdersList = UseOrdersDone();

  const orderStateAsDelivered = (orderIdentifier) => {
    firestore.collection("order")
      .doc(orderIdentifier)
      .update({
        state: "delivered",
        delivery_time: new Date().toLocaleString("es-PE"),
      })
      .then(() => {
        console.log("updated the state to delivered");
      });
  };

  return (
    <>
      <ul className="ulPrepared">
        {currentPreparedOrdersList.map((order) => (
          <li className="preparedItems" key={order.orderId}>
            <div>
              {" "}
              Customer: {order.data.customer}, Table : {order.data.table}{" "}
            </div>

            <button
              onClick={() => {
                orderStateAsDelivered(order.orderId);
              }}
            >
              Entregado
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PreparedOrdersList;
