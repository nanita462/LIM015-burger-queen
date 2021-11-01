import React from "react";
//import "../sass/item.scss";

function Item(props) {
  return (
    <div>
      <div onClick={props.onClick} className="item-box">
        <div className="text-left">
          <p className="item-name">{props.product}</p>
        </div>
        <div className="text-right">
          <p className="item-price">$ {props.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
