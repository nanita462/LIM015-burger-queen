import React, { useState } from "react";
import './modalContent.scss'

function ModalContent(props) {
  const [optionMeat, setOptionMeat] = useState("");
  const [egg, setEgg] = useState("");
  const [cheese, setCheese] = useState("");

  return (
    <>
      <div className="modal-title">Options</div>
      <div className="option">
        <input
          type="radio"
          name="options"
          value="meat"
          className="meat"
          id="opt1-label"
          onChange={(e) => setOptionMeat(e.target.value)}
        />
        <label className="options-label" htmlFor="opt1-label">
          Meat
        </label>
        <input
          type="radio"
          name="options"
          value="chicken"
          className="chicken"
          id="opt2-label"
          onChange={(e) => setOptionMeat(e.target.value)}
        />
        <label className="options-label" htmlFor="opt2-label">
          Chicken
        </label>
        <input
          type="radio"
          name="options"
          value="veggie"
          className="veggie"
          id="opt3-label"
          onChange={(e) => setOptionMeat(e.target.value)}
        />
        <label className="options-label" htmlFor="opt3-label">
          Veggie
        </label>
      </div>
      <div className="modal-title">Additionals</div>
      <div className="option-two">
        <input
          type="checkbox"
          name="extra-egg"
          value="egg"
          className="egg"
          id="chk1-label"
          onChange={(e) => setEgg(e.target.value)}
        />
        <label className="options-label" htmlFor="chk1-label">
          Egg $1
        </label>
        <input
          type="checkbox"
          name="extra-cheese"
          value="cheese"
          className="cheese"
          id="chk2-label"
          onChange={(e) => setCheese(e.target.value)}
        />
        <label className="options-label" htmlFor="chk2-label">
          Cheese $1
        </label>
      </div>
      <button
        className="modal-btn"
        data-egg={egg}
        data-cheese={cheese}
        data-meat={optionMeat}
        onClick={props.onClick}
      >
        Add item
      </button>
    </>
  );
}

export default ModalContent;
