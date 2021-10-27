import React, { useContext } from "react";
import { firestore } from "../firebase/config";
import SingleOrderContext from "./SingleOrderContext.jsx";
//import "../modal/cancelModal.scss";

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
            <div className="cancelWarning">
                Please confirm you want to cancel this order
            </div>
            <button
                className="confirm"
                onClick={() => {
                    orderStateAsCanceled(singleOrder.orderId);
                }}
            >
                Confirmar
            </button>
        </>
    );
};

export default CancelWarning;
