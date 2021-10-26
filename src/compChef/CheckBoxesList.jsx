import React, { useContext, useState, useEffect, Fragment } from "react";
import SingleOrderContext from "./SingleOrderContext.jsx";
import { firestore } from "../firebase/config";

const CheckboxesList = () => {
    const [singleOrder,] = useContext(SingleOrderContext);
    const [box, setBox] = useState(false);
    const [productItem, setProductItem] = useState();
    const [orderIdentifier, setOrderIdentifier] = useState();

    useEffect(() => {
        if (
            productItem !== undefined &&
            box !== undefined &&
            orderIdentifier === singleOrder.orderId
        ) {
            singleOrder.data.order[productItem].readyChef = box;
            let updatedData = singleOrder.data;

            firestore.collection("order")
                .doc(orderIdentifier)
                .set(updatedData)
                .then(() => {
                    //console.log("updated");

                });
        }
    });

    const getCurrentData = (booleanToBox, productItemValue, orderIdValue) => {

        setBox(booleanToBox);
        setProductItem(productItemValue);
        setOrderIdentifier(orderIdValue);
    };

    return (
        <Fragment>
            <ul className="checkBoxList">
                {singleOrder.data.order.map((product) => {
                    return (
                        <li
                            className="checkboxItem"
                            key={singleOrder.orderId + "productLi" + product.key}
                        >
                            <label className="labelCheckbox">
                                <input
                                    type="checkbox"
                                    className="checkboxFigure"
                                    checked={product.readyChef}
                                    key={singleOrder.orderId + "productInput" + product.key}
                                    onChange={(e) => {
                                        getCurrentData(
                                            e.target.checked,
                                            singleOrder.data.order.indexOf(product),
                                            singleOrder.orderId
                                        );
                                    }}
                                />
                                <span className="customCheckbox"></span>

                                <div className="productQuantity">{product.quantity}</div>
                                <div className="productName">{product.product}</div>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};

export default CheckboxesList;