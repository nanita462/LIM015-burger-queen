import React, { useContext } from "react";
import SingleOrderContext from "./SingleOrderContext.jsx";
import CheckboxesList from "./CheckboxesList.jsx";
import DoneButtonForChef from "./DoneButtonForChef.jsx";
import CancelButtonForChef from "./CancelButtonForChef.jsx";

const SinglePendingOrderComponent = () => {
  const [singleOrder,] = useContext(SingleOrderContext);

  return (
    <div className="rectangle" id="rectangleContainer">
      <div className="customerTitle"> Cliente: </div>
      <div id="customerName"> {singleOrder.data.customer}</div>
      <div className="tableTitle"> Mesa:</div>
      <div id="tableNumber"> {singleOrder.data.table}</div>
      <div className="entry">Hora ingreso:</div>
      <div className="entryDateHour">{singleOrder.data.init_time} </div>
      <div className="quantity">Cant.</div>
      <div className="product">Producto</div>

      <CheckboxesList />
      <CancelButtonForChef />
      <DoneButtonForChef />
    </div>
  );
};

export default SinglePendingOrderComponent;
