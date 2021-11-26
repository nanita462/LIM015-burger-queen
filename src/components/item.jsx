import React from "react";
import './item.scss';

function Item(props) {
  return (
    
      <section onClick={props.onClick} className='menuDescriptions'>
        <button className='description'><h3>{props.product}</h3><h3>$ {props.price}</h3></button>
      </section>
    
  );
}
export default Item;
