import React, { useState } from "react";
import HeaderChef from "../compChef/HeaderChef.jsx";
import PendingOrders from "../compChef/PendingOrdersList.jsx";
import DoneOrders from "../compChef/DoneOrderList.jsx";

//import "./chefViewStyles.scss";

const ChefView = () => {
    const [component, setComponent] = useState("pending");

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
        <div id="chefViewContainer">
            <HeaderChef rol="chef" />
            <div id="pendingOption" onClick={() => renderPendingView()}>
                Pendientes
            </div>
            <div id="line"></div>
            <div id="doneOption" onClick={() => renderDoneView()}>
                Listos
            </div>
            {component === "pending" ? <PendingOrders /> : <DoneOrders />}
        </div>
    );
};

export default ChefView;