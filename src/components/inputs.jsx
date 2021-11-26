import React from "react";
import './inputs.scss'

function Input (props){
return(
    
    <section className='orderInput'>
    <h2>{props.label}</h2>
    <input
        className={props.className}
        type="text"
        aria-label="input-form"
        value={props.value}
        placeholder={props.placeh}
        name={props.name}
        required
        onChange={props.handleChange}
    />
    </section>
)
}

export default Input;