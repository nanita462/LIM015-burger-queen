import React, { useContext } from "react";
import SingleDoneOrderContext from "./SingleDoneOrderContext.jsx";
import CheckboxesDoneList from "./CheckboxesDoneList.jsx";
import './SingleDoneOrderComponent.scss'

const SingleDoneOrderComponent = () => {
  const singleDoneOrder = useContext(SingleDoneOrderContext);

  return (
    <section className="summaryOrderContainer2">
      <section className="itemSummary2">
        <h2>Orden Listo</h2>
        <p id="customerName2"> Cliente: {singleDoneOrder.data.customer}</p>
        <p id="tableNumber2">Mesa: {singleDoneOrder.data.table}</p>
        <p className="entryDateHour2">Hora ingreso: {singleDoneOrder.data.init_time}</p>
        <p className="doneDateHour">Hora salida: {singleDoneOrder.data.done_time}</p>

        <section className='titleDoneOrder'>

          <h3 className="quantity">Cant.</h3>
          <h3 className="product">Producto</h3>
        </section>

      </section>
      <CheckboxesDoneList />
    </section>
  );
};

export default SingleDoneOrderComponent;
