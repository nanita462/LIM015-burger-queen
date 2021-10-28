import React from "react";

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick} id={props.id}>
      {props.label}
    </button>
  );
}
export default Button;
