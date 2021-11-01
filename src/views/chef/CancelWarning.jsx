import React, { Fragment, useContext } from "react";
import { firestore } from "../../firebase/config";
import SingleOrderContext from "./SingleOrderContext.jsx";
//import "../../sass/cancelModal.scss";

const CancelWarning = () => {
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);

  const orderStateAsCanceled = (orderIdentifier) => {
    firestore.collection("order")
      .doc(orderIdentifier)
      .update({
        state: "canceled",
      })
      .then(() => {
        console.log("updated the state to canceled");
      });

    setSingleOrder();
  };

  return (
    <Fragment>
      <div className="cancelWarning">
        Por confirme que quiere borrar la orden
      </div>
      <button
        className="confirm"
        onClick={() => {
          orderStateAsCanceled(singleOrder.orderId);
        }}
      >
        Confirme
      </button>
    </Fragment>
  );
};

export default CancelWarning;
