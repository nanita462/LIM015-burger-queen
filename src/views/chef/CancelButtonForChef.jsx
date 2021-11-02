import React, { Fragment, useState } from "react";
import Modal from "../../views/modal/modal.jsx";
import CancelWarning from "./CancelWarning.jsx";
import './SinglePendingOrderComponent.scss'

const CancelButtonForChef = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="cancelButtonForChef"
        onClick={() => {
          setOpen(true);
        }}
      >
        Cancelar
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <CancelWarning />
      </Modal>
    </>
  );
};

export default CancelButtonForChef;
