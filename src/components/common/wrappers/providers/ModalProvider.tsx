import React from "react";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props) => (
  <>
    <div id="modal-container" />
    {children}
  </>
);

export default ModalProvider;
