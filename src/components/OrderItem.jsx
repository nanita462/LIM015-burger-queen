import React from "react";
import "./OrderItem.scss";

function OrderItem(props) {
  return (
    <section className="orderItemContainer">
      <section className="descriptionOrderItem">
        <p className="item-name">{props.quantity}</p>
      </section>
      <section className="descriptionOrderItem">
        <p className="item-product">{props.product}</p>
      </section>
      <section className="descriptionOrderItem">
        <p className="item-price">$ {props.newPrice}</p>
      </section>
      <section className='iconOrderItem'>
        <span><i onClick={props.addItem} className="fas fa-plus-circle"></i></span>
        <span><i onClick={props.restItem} className="fas fa-minus-circle"></i></span>
        <span><i onClick={props.deleteItem} className="fas fa-trash-alt"></i></span>
      </section>
    </section>
  );
}
export default OrderItem;
