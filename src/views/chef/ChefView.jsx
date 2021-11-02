import React from "react";
import PendingOrders from "./PendingOrdersList.jsx";
import DoneOrders from "./DoneOrdersList.jsx";
import HeaderChef from "../../components/HeaderChef.jsx";
import "./ChefView.scss";

const ChefView = () => {
  const [component, setComponent] = React.useState("pending");

  const renderPendingView = () => {
    setComponent("pending");
    document.getElementById("pendingOption").style.color = " #5D9B84";
    document.getElementById("doneOption").style.color = null;
  };

  const renderDoneView = () => {
    setComponent("done");
    document.getElementById("pendingOption").style.color = "#D4804C";
    document.getElementById("doneOption").style.color = "#5D9B84";
  };

  return (
    <section  id="chefViewContainer">
      <HeaderChef rol="chef" />
      <button  id="pendingOption" onClick={() => renderPendingView()}>
        Pendiente
      </button>
      <section id="line"></section>
      <button id="doneOption" onClick={() => renderDoneView()}>
        Listo
      </button>
      {component === "pending" ? <PendingOrders /> : <DoneOrders />}
    </section>
  );
};

export default ChefView;
