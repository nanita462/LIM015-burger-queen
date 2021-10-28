import React, { Fragment, useState } from "react";

import Modal from "../../views/modal/modal.jsx";
import CancelWarning from "./CancelWarning.jsx";

const CancelButtonForChef = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CancelButtonForChef;
