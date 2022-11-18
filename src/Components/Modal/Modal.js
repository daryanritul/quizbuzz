import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({
  title = 'Header',
  body = 'Hello World',
  onCancel,
  onConfirm,
  cancelTitle = 'Cancel',
  confirmTitle = 'Confirm',
}) => {
  return (
    <div className="modal">
      <div className="modal-card">
        <div className="modal-card__head">
          <p>{title}</p>
          <span onClick={() => onCancel()}>
            <MdClose className="modal-icon" />
          </span>
        </div>
        <div className="modal-card__body">{body}</div>
        <div className="modal-card__footer">
          <button className="modal-btn cancel" onClick={() => onCancel()}>
            {cancelTitle}
          </button>
          <button className="modal-btn confirm" onClick={() => onConfirm()}>
            {confirmTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
