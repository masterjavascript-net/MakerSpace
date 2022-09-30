import React from "react";

import { ModalBackground, Modal } from "./about-modal.styles";

const AboutModal = ({details,closeModal, modalVisibility}) => {


  return (
    <ModalBackground style={{opacity: `${modalVisibility}`}}>
      <Modal>

        <div className="row position-relative w-100">
            <span className="close-btn" onClick={() => closeModal({})}>
                x
            </span>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img-wrapper">
              <img src={require(`../../assets/${details.imageName}`)} alt="img" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="content">
              <h4 className="title">{details.title}</h4>
              <p className="text">
                {details.content}
              </p>
              <button className="close-btn-2" onClick={() => closeModal({})}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default AboutModal;
