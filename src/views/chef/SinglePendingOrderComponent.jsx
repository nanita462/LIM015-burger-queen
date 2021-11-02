import React, { useContext } from "react";
import SingleOrderContext from "./SingleOrderContext.jsx";
import CheckboxesList from "./CheckboxesList.jsx";
import DoneButtonForChef from "./DoneButtonForChef.jsx";
import CancelButtonForChef from "./CancelButtonForChef.jsx";
import './SinglePendingOrderComponent.scss'

const SinglePendingOrderComponent = () => {
  const [singleOrder,] = useContext(SingleOrderContext);

  return (
    <section className="summaryOrderContainer" id="rectangleContainer">
      <section className="itemSummary">
      <h2>Orden Pendiente</h2>
      <p id="customerName"> Cliente: {singleOrder.data.customer}</p>
      <p id="tableNumber">Mesa: {singleOrder.data.table}</p>
      <p className="entryDateHour">Hora ingreso: {singleOrder.data.init_time} </p>
      <section className='titlePendingOrder'>
      <h3>Listo</h3>
      <h3 className="quantity">Cant.</h3>
      <h3 className="product">Producto</h3>
      </section>
      </section>
      <CheckboxesList />
      <section className="btnForChefOrder">
      <CancelButtonForChef />
      <DoneButtonForChef />
      </section>
    </section>
  );
};

export default SinglePendingOrderComponent;
