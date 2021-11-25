import React, { useContext, Fragment } from "react";
import SingleDoneOrderContext from "./SingleDoneOrderContext.jsx";
import './CheckboxesDoneList.scss'

const CheckboxesDoneList = () => {
  const singleDoneOrder = useContext(SingleDoneOrderContext);

  return (
    <>
      <ul className="checkBoxDoneList">
        {singleDoneOrder.data.order.map((product) => {
          return (
            <li
              className="checkboxItem"
              key={singleDoneOrder.orderId + "productLi" + product.key}
            >
              <label className="labelCheckbox">
                <span className="customDoneCheckbox"></span>

                <div className="productQuantity">{product.quantity}</div>
                <div className="productName">{product.product}</div>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CheckboxesDoneList;
