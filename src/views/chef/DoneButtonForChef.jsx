import React, { Fragment, useContext } from "react";
import SingleOrderContext from "./SingleOrderContext.jsx";
import { firestore } from "../../firebase/config";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const DoneButtonForChef = () => {
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  // const notify = () =>
  //   toast.error("Please Check all products in the order!", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });

  const orderStateAsPrepared = (orderIdentifier) => {
    console.log(singleOrder.data.order);

    let readyChefArray = singleOrder.data.order.map((item) => item.readyChef);
    let readyForDone = readyChefArray.every((check) => check === true);

    if (readyForDone) {
      firestore.collection("order")
        .doc(orderIdentifier)
        .update({
          state: "prepared",
          done_time: new Date().toLocaleString("es-PE"),
        })
        .then(() => {
          console.log("updated the state to prepared");
        });

      setSingleOrder();
    } else {
      // notify();
      alert('algo en donebtnchef')
    }
  };

  return (
    <Fragment>
      <button
        className="doneButtonForChef"
        onClick={() => {
          orderStateAsPrepared(singleOrder.orderId);
        }}
      >
        Listos
      </button>
      {/* <ToastContainer /> */}
    </Fragment>
  );
};

export default DoneButtonForChef;
