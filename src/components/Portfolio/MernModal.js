/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";

export const MernModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Mern Stack</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <p>A restful API in Mern stack.</p>
        <p>github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/JohnGJackson0/MERN-Stack");
          }}
        >
          https://github.com/JohnGJackson0/MERN-Stack
        </a>
      </Modal.Body>
    </Modal>
  );
};
