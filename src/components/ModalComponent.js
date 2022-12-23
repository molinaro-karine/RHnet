import React from "react";
import Modal from "./Modal";
import "./modal.css";

export function ModalComponent(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      message={props.message}
      handleClose={props.handleClose}
    />
  );
}
