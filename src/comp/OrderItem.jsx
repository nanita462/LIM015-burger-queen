import React from "react";
//import "../views/waiter/waiter.scss";

function OrderItem(props) {
    return (
        <div className="Orderitem-box">
            <div className="cant">
                <p className="item-name">{props.quantity}</p>
            </div>
            <div className="product">
                <p className="item-product">{props.product}</p>
            </div>
            <div className="price">
                <p className="item-price">$ {props.newPrice}</p>
            </div>

            <section>
                <span><i onClick={props.addItem} className="fas fa-plus-circle"></i></span>
                <span><i onClick={props.restItem} className="fas fa-minus-circle"></i></span>
                <span><i onClick={props.deleteItem} className="fas fa-trash-alt"></i></span>
            </section>
        </div>
    );
}
export default OrderItem;