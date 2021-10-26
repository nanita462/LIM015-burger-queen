import React from "react";
//import "./item.scss";

function Item(props) {
    return (
        <div>
            <div onClick={props.onAddProduct} className="item-box">
                {/* <div>
                    <img src={props.img} alt='pic'></img>
                </div> */}
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