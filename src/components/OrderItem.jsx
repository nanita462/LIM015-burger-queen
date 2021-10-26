import React from "react";

// ****NUEVOOOOO FILE

function OrderItem(props) {
    return (
        <section>
            <section>
                <p>{props.quantity}</p>
            </section>

            <section>
                <p>{props.product}</p>
            </section>

            <section>
                <p>$ {props.newPrice}</p>
            </section>

            <section>
                <span><i onClick={props.addItem} className="fas fa-plus-circle"></i></span>
                <span><i onClick={props.restItem} className="fas fa-minus-circle"></i></span>
                <span><i onClick={props.deleteItem} className="fas fa-trash-alt"></i></span>
            </section>
        </section>
    )
}
export default OrderItem;