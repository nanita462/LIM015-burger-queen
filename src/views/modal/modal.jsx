import React from "react";
import ReactDom from "react-dom";
import "./modal.scss";

function Modal({ children, open, close }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-container">
        <span className="close-modal" onClick={close}>
          X
        </span>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
