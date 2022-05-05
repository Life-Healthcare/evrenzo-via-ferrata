import React from "react";
import ReactDOM from "react-dom";
import { Backdrop, ModalOverLay } from "@/components/modal/modal.style";

const portalElement = document.getElementById("overlay-root");

type OverLayComponentProps = {
  onClose: () => void;
  children?: any;
};

export const Modal = ({ onClose, children }: OverLayComponentProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>
          <div className="content">{children}</div>
        </ModalOverLay>,
        portalElement
      )}
    </>
  );
};
