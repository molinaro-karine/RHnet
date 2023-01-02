import React from "react";
import { Modal } from "simple-component-modal-bykm";
import "./modalComponent.css";

export function ModalComponent(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      message={props.message}
      handleClose={props.handleClose}
    />
  );
}
