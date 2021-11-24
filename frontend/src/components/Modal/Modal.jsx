import React from "react";
import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <ul className="modal__list">
        <li className="modal__item">
          <a href="#" className="modal__link--active">
            yoga
          </a>
        </li>
        <li className="modal__item">
          <a href="#" className="modal__link">
            water
          </a>
        </li>
        <li className="modal__item">
          <a href="#" className="modal__link">
            meditation
          </a>
        </li>
        <li className="modal__item">
          <a href="#" className="modal__link modal__link--pomodoro">
            pomodoro
          </a>
        </li>
        <li className="modal__item">
          <a href="#" className="modal__link modal__link--add">
            add new
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
