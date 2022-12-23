//libraries
import React, { useEffect, useRef } from "react";

//styles
import "./modal.css";

export default function Modal({ message, isVisible, handleClose }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    if (modalRef.current && isVisible) {
      modalRef.current.addEventListener("keydown", close);
      closeButtonRef.current.focus();
    }
  }, [isVisible, handleClose]);

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  return (
    isVisible && (
      <div className="modal-wrapper" ref={modalRef} tabIndex="-1">
        <div className="modal">
          <p className="modal-message">{message}</p>
          <button
            type="button"
            ref={closeButtonRef}
            className="modal-closing"
            aria-label="Close"
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="modal-backdrop"></div>
      </div>
    )
  );
}
