import React from "react";
import ReactDom from "react-dom";
import "./modal.scss";

function Modal({ children, open, close }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <section className="overlay" />
      <section className="modal-container">
        <span>
        <i class= "close-modal fas fa-times-circle" onClick={close}></i>
        </span>
        {children}
      </section>
    </>,
    document.getElementById("modalSection")
  );
}

export default Modal;
