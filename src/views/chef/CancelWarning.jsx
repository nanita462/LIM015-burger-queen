import React, { Fragment, useContext } from "react";
import { firestore } from "../../firebase/config";
import SingleOrderContext from "./SingleOrderContext.jsx";
//import "../../sass/cancelModal.scss";
import "./CancelWarning.scss";
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
    <>
    <section className='cancelWarningContainer' >
      <h3>
        Confirme si desea cancelar el pedido
      </h3>
      <button
        className="confirm"
        onClick={() => {
          orderStateAsCanceled(singleOrder.orderId);
        }}
      >
        Confirmar
      </button>
      </section>
    </>
  );
};

export default CancelWarning;
