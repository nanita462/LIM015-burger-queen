import React, { useContext } from "react";
import SingleDoneOrderContext from "./SingleDoneOrderContext.jsx";
import CheckboxesDoneList from "./CheckboxesDoneList.jsx";

const SingleDoneOrderComponent = () => {
  const singleDoneOrder = useContext(SingleDoneOrderContext);

  return (
    <div className="rectangle">
      <div className="customerTitle"> Cliente: </div>
      <div id="customerName"> {singleDoneOrder.data.customer}</div>
      <div className="tableTitle"> Mesa:</div>
      <div id="tableNumber"> {singleDoneOrder.data.table}</div>
      <div className="entry">Hora ingreso:</div>
      <div className="entryDateHour">{singleDoneOrder.data.init_time} </div>
      <div className="prepared">Hora salida:</div>
      <div className="doneDateHour">{singleDoneOrder.data.done_time} </div>
      <div className="quantityDone">Cant.</div>
      <div className="productDone">Producto</div>

      <CheckboxesDoneList />
    </div>
  );
};

export default SingleDoneOrderComponent;
